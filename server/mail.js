var nodemailer = require('nodemailer');

exports.sendMail = function(req,res){
    var data = req.body;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.password
        }
    });
    var mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject:data.contactEmailSubject,
        text: "New message from " + data.contactEmail + " saying ' " + data.contactMsg + " '"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({message: 'error'});
        }
        else{
            console.log('Message sent: ' + info.response);
            res.json({message: info.response});
        }
    });
};
