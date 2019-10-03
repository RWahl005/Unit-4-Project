var express = require("express");
var app = express();
var fetch = require('node-fetch');
var port = 5500;

app.use(express.static('public'));

app.listen(port, function() {
});
//https://digimon-api.herokuapp.com/api/digimon
//https://dog.ceo/api/breeds/image/random

app.get("/", function(req, res){
    //PUT CODE HERE. (YOU CAN ONLY USE RES.SEND() once so make sure to get all of the html into one string first.)
    getData ("https://digimon-api.herokuapp.com/api/digimon", (data) => { 
        // The amount of digimon to display
        var limit = 10;
        // The HTML to append.
       var html = '<link rel="stylesheet" href="styles.css">';
        for (let i = 0; i < limit; i++){
            html +="<section class='digi'>";
            html += `<p>${data[i].name}</p>`;
            html += `<img src='${data[i].img}'>`;
            html += "</section>";
        }
        res.send(html);
    })
    
});

app.get("/dogs", function(req, res){
    //PUT CODE HERE. (YOU CAN ONLY USE RES.SEND() once so make sure to get all of the html into one string first.)
    var names = ["Oreo", "Greg", "Bob", "Jeff"]
    getData ("https://dog.ceo/api/breeds/image/random", (data) => { 
        // The amount of digimon to display
        // The HTML to append.
       var html = '<link rel="stylesheet" href="styles.css">';
            html +="<section>";
            html += `<p>${names[Math.floor(Math.random() * 3)]}</p>`;
            html += `<img id="dog" src='${data.message}'>`;
            html += "</section>";
        res.send(html);
    })
    
});

function getData(url, callback){
    fetch(url).then((Response) => Response.json())
    .then((data) => callback (data));
}