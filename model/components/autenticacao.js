const LocalStrategy = require('passport-local').Strategy;
const seguranca = require("./seguranca");
const usuarioBanco = require("../repositories/usuarioBD");

module.exports = function(passport){
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
}