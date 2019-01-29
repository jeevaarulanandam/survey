const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../configs/keys');

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientId,
            clientSecret: keys.googleClientSecretId,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("AT:", accessToken);
            console.log("RT:", refreshToken);
            console.log("Profile:", profile);
            console.log(accessToken);
        }
    ));