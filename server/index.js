const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./configs/keys');
const app = express();

app.get('/mylife', (req, res) => {
    res.send({
        test: "Ave Maria"
    })
});

app.get('/', (req, res) => {
    res.send({
        test: "Hello World"
    })
});

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecretId,
    callbackURL:'/auth/google/callback'
},
(accessToken,refreshToken,profile,done)=>{
    console.log("AT:",accessToken);
     console.log("RT:",refreshToken);
      console.log("Profile:",profile);
       console.log(accessToken);
}
));

app.get('/auth/google',
passport.authenticate('google',{
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000
app.listen(5000);