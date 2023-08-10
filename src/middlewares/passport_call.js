import passport from "passport";

export default (strategy, failurePath = "fail-load-resource") => {
  return async (req, res, next) => {
    passport.authenticate(
      strategy,
      { failureRedirect: `/api/session/${failurePath}` },
      (err, user, info) => {
        if (err) return next(err);
        if (!user)
          return res
            .status(401)
            .json({ success: false, error: info.toString() });
        req.user = user;
        console.log("userlala", user);
        return next();
      }
    )(req, res, next);
  };
};
