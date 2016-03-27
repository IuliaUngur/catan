import express = require('express');
import path = require('path');
import http = require('http');
import mongoose = require('mongoose');
import bodyParser = require('body-parser'); 

mongoose.connect('mongodb://iuli_ungur:pattycut94@ds025419.mlab.com:25419/sabotor');

var port: number = process.env.PORT || 3000;
var app = express();
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));

database.once('open', function() {    
    console.log('Database connection established');
    
    var userSchema = new mongoose.Schema({
        userName: { type : String , unique : true, required : true },
        password: { type : String , required : true },
        name: { type : String , required : true },
        authToken:  { type : String }
    });
    
    var User = mongoose.model('User', userSchema);
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // Static routes
    app.use('/app', express.static(path.resolve(__dirname, 'app')));
    app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
    app.use('/images', express.static(path.resolve(__dirname, 'images')));
    app.use('/css', express.static(path.resolve(__dirname, 'css')));

    // Start server
    var server = app.listen(port, function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log('This express app is listening on port:' + port);
    });

    // Dynamic routes
    app.get('/*',  (req: express.Request, res: express.Response) => {
        res.sendFile(path.resolve(__dirname , 'index.html'));
    }); 
    
    function guidGenerator() : string {
        var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    // Authorization Service

    app.post('/api/authorization/registerUser',  (req: express.Request, res: express.Response) => {
        console.log("RegisterUser: ");
        console.dir(req.body);
        
        var newUser = new User({
            userName: req.body.userName,
            password: req.body.password,
            name: req.body.name,
            authToken: ""
        });
        
        newUser.save(function (err) {
            if(err) {
                res.json({errorMessage: err});
            }
            else {
                res.json({success: true});
            }
        });
        
    }); 

    app.post('/api/authorization/login',  (req: express.Request, res: express.Response) => {
        console.log("Login request: ", req.body);
        var user = {};
        
        User.findOne(
            {
                userName: req.body.userName, 
                password: req.body.password
            },
            function(err, raw) {
                console.log("Login request: findOne() ", err, raw);
                if(err) {
                    res.json({errorMessage: err});
                }
                else {
                    if(raw != null) {
                        raw['authToken'] = guidGenerator();
                        raw.save(function(err, raw) {
                            if(err) {
                                res.json({errorMessage: err});
                            }
                            else {
                                res.json({authToken: raw['authToken']});
                            }
                        });
                    } 
                    else {
                        res.json({errorMessage: "User or password invalid!"});
                    }
                }
            }
        );
    }); 
    
    app.post('/api/authorization/logout',  (req: express.Request, res: express.Response) => {
        console.log("Logout request: ", req.body);
        
        User.findOne(
            {
                authToken: req.body.authToken
            },
            function(err, raw) {
                console.log("Logout request: findOne() ", err, raw);
                if(err) {
                    res.json({errorMessage: err});
                }
                else {
                    if(raw != null) {
                        raw['authToken'] = undefined;
                        raw.save(function(err, raw) {
                            if(err) {
                                res.json({errorMessage: err});
                            }
                            else {
                                res.json({success: true});
                            }
                        });
                    } 
                    else {
                        res.json({errorMessage: "Invalid or expired token!"});
                    }
                }
            }
        );
    });
    
     // GameLobbyService 
     
     app.get('/api/game-lobby/', (req: express.Request, res: express.Response) => {
         console.log('get game-lobby', req.body);
         
         res.json('test');
     })
});
