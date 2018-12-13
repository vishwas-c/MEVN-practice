var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');

var app = express();

/* var logger = function(req,res,next) {
    console.log('Logging...');
    next();
}

app.use(logger); */

//View Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Set Static Path
/* app.use(express.static(path.join(__dirname,'public'))); */

/* var people = [
    {
    name: 'Jeff',
    age: 30
    },
    {
        name: 'Sara',
        age: 22
    }
]
 */

var users = [
    {
        id:1,
        first_name:'Vishwas',
        last_name: 'Doe',
        email: 'vishwasdoe@gmail.com',
    },
    {
        id:2,
        first_name:'Rocky',
        last_name: 'Doe',
        email: 'rocky@gmail.com',
    },
    {
        id:3,
        first_name:'simha',
        last_name: 'DOe',
        email: 'simha@gmail.com',
    }
] 
app.get('/',function(req,res){

    res.render('index',{
        title: 'Vishwas',
        users: users
    });
});

app.post('/users/add',function(req,res){
    var newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    console.log(newUser);
});

app.listen(3000,function() {
    console.log('Server started on port 3000');
});