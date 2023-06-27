import passport from "passport";
import GHStrategy from "passport-github2";
import User from "../models/User.js";

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
}
