const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');


module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            // Match email with user in db
            db.User.findOne ({
                where: { email: email}})
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
        db.User.findOne({
            where: { id: id}})
        .then(user => {
            done(null, user);    
        });
    });
} 