const Authentication = require('./controllers/authentication'); 
const passportService = require('./services/passport');
const passport = require('passport');
const calendar = require('./services/calendar');
const ejs = require("ejs");


const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})

module.exports = function app(app) {
    // app.get('/',requireAuth,function (req,res,next) {
    //     res.send({"hi":" there"});
    // });
    app.get('/',function (req,res,next) {
        res.render(`index`);
    });
    app.post('/signin',requireSignin,Authentication.signin)
    app.post('/signup',Authentication.signup);
    app.get('/calendar',calendar.start);
    app.post('/callbackOauth',function (req,res,next) {
        console.log("callback:",JSON.stringify(req.body));
    });

    
}

