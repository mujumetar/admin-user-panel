const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const admin = require("../models/adminTbl");

passport.use(
  new localStrategy({ usernameField: "email" }, async function (
    email,
    password,
    done
  ) {
    try {
      let currUser = await admin.findOne({ email: email });

      if (!currUser) {
        return done(null, false);
      }

      if (currUser.password != password) {
        return done(null, false);
      }

      return done(null, currUser);
    } catch (error) {
      console.log(error);
      return done(null, false);
    }
  })
);

passport.serializeUser(function (user, done) {
  if (!user) {
    return done(null, false);
  }

  return done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  let currUser = await admin.findById(id);

  if (!currUser) {
    return done(null, false);
  }
  return done(null, currUser);
});

passport.isAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/admin");
  }
};

passport.userAuth = function (req, res, next) {
  res.locals.user = req.user;
  next();
};

module.exports = passport;
