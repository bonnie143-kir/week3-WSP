var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));

app.listen(3000, ()=>{
    var d= new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server started listenng at: " + n + ":" + m);
});

// Route to get the homepage and login form 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/homepage.html');
});

// Route to get the account page for the user
app.get('/accountpage', function(req, res){
    res.sendFile(__dirname + '/www/accountpage.html');
});

// Route to check user credentials
app.post('/api/login', function(req, res){
    let userAccounts = [{'email':"andy@gmail.com.au",'pwd':"andy"}, {'email': "sandy@a.com.ki", 'pwd':"sandy"}, {'email': "bongii@outmail.com", 'pwd':"bongii"}]

    if (!req.body){
        return res.sendStatus(400)
    }
        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        customer.valid = false;
    for (let i=0;i<userAccounts.length;i++){
        if (req.body.email == userAccounts[i].email && req.body.upwd == userAccounts[i].pwd){
            customer.valid = true;
        }
    }
        res.send(customer);
});