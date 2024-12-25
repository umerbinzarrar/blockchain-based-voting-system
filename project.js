const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const { dirname } = require("path");


const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/login.html");
});



app.get("/home", function(req, res){
    res.sendFile(__dirname + "/public/home.html");
});

app.get("/Authentication", function(req, res){
    res.sendFile(__dirname + "/public/Authentication.html");
});


app.get("/resetPassword", function(req, res){
    res.sendFile(__dirname + "/public/resetPassword.html");
});

app.get("/updateProfile", function(req, res){
    res.sendFile(__dirname + "/public/updateProfile.html");
});

app.get("/assignRole", function(req, res){
    res.sendFile(__dirname + "/public/assignRole.html");
});

app.get("/multifactor-authentication", function(req, res){
    res.sendFile(__dirname + "/public/multifactor-authentication.html");
});



app.get("/RealTimeResult", function(req, res){
    res.sendFile(__dirname + "/public/RealTimeResult.html");
});


app.get("/LiveVoteCounting", function(req, res){
    res.sendFile(__dirname + "/public/LiveVoteCounting.html");
});
app.get("/DisplayVotingTrends", function(req, res){
    res.sendFile(__dirname + "/public/DisplayVotingTrends.html");
});
app.get("/RealTimeAnalysis", function(req, res){
    res.sendFile(__dirname + "/public/RealTimeAnalysis.html");
});
app.get("/visualize-with-charts", function(req, res){
    res.sendFile(__dirname + "/public/visualize-with-charts.html");
});




app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000")
});