import passport from "passport";
import GHStrategy from "passport-github2";
import { Strategy } from "passport-local";
import jwt from "passport-jwt";
import User from "../dao/Mongo/Models/User.js";

const { GH_CLIENT_ID, GH_CLIENT_SECRET, GITHUB_CALLBACK } = process.env;

export default function () {
  passport.serializeUser((user, done) => {
    done(null, user._id); // no hay error, y el id del usuario
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // passport.use(
  //   "register",
  //   new Strategy(
  //     {
  //       passReqToCallback: true,
  //       usernameField: "email",
  //     },
  //     async (req, username, password, done) => {
  //       try {
  //         let one = await User.findOne({ email: username });
  //         if (one) {
  //           return done(null, false);
  //         } else {
  //           let user = await User.create(req.body);
  //           delete user.password;
  //           return done(null, user);
  //         }
  //       } catch (error) {
  //         return done(error);
  //       }
  //     }
  //   )
  // );

  passport.use(
    "signin",
    new Strategy(
      {
        usernameField: "email",
      },
      async (username, password, done) => {
        try {
          let one = await User.findOne({ email: username });
          if (one) {
            return done(null, one);
          } else {
            return done(null, false);
          }
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );

  passport.use(
    "github", // nombre de la estrategia
    new GHStrategy(
      {
        clientID: GH_CLIENT_ID,
        clientSecret: GH_CLIENT_SECRET,
        callbackURL: GITHUB_CALLBACK,
      }, //objeto de configuración
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);
          const one = await User.findOne({ email: profile._json.login }); // los datos vienen de github
          if (one) {
            return done(null, one);
          }
          const user = await new User.create({
            name: profile._json.name,
            email: profile._json.login,
            password: "hola1234",
          });
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );
  passport.use(
    "jwt",
    new jwt.Strategy(
      {
        secretOrKey: process.env.SECRET_JWT,
        jwtFromRequest: jwt.ExtractJwt.fromExtractors([
          (req) => req?.cookies["token"],
        ]),
      },
      async (jwt_payload, done) => {
        try {
          console.log(jwt_payload, "jtwt_payload");
          let one = await User.findOne({ email: jwt_payload.email });
          if (one) {
            delete one.password;
            return done(null, one);
          } else {
            return done(null, false);
          }
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  //separar en funciones diferentes
}
