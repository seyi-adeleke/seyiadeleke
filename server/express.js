var path = require('path');
var express = require('express');
var bodyParser   = require('body-parser');
var rootPath = path.normalize(__dirname + "/../" );

var mail  = require('./mail');
var port = process.env.PORT||3000;

module.exports = function(app){
    app.use(express.static(rootPath +'/public'));
    app.use(bodyParser());

    app.get('*',function(req,res){
        res.sendFile(path.join(rootPath + '/public/index.html'));
    });

    app.route('/contact-form').post(mail.sendMail);
    app.listen(port);

    console.log("server running at port "+ port)
};