const Authentification = require('./controllers/authentification')
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requreSignin = passport.authenticate('local', {sesion: false});

module.exports = function (app) {
    app.get('/', requireAuth, function (req, res) {
        res.send({hi: 'there'})
    });
    app.post('/signin', requreSignin, Authentification.signin);
    app.post('/signup', Authentification.signup)
};
