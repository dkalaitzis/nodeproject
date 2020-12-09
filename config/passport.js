const LocalStrategy = require('passport-local').Strategy;
// db.sequelize.sync() ?
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            // Match email with user in db
            User.findOne({ email: email })
                .then(user => {
                    // No match for this email
                    if(!user) {
                        return done(null, false, { message: 'That email is not registered'});
                    }

                    // Match inputted password and hashed user.password in the db
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password incorrect'});
                        }
                    } );
                })
                .catch(err => console.log(err));
        })
    );


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done,(err, user);
        });
    });
}