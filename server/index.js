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

passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecretId,
    callbackURL:'/auth/google/callback'
},
accessToken=>{
    console.log(accessToken);
}
));

app.get('/auth/google',
passport.authenticate('google',{
    scope:['profile','email']
}));

const PORT = process.env.PORT || 5000
app.listen(5000);