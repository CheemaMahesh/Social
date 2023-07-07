const nodeMailer=require('../config/nodemailer');





//this is anther way of exporting a method
exports.newComment=(comment)=>{
    console.log("new comment mailer");
    nodeMailer.transporter.sendMail({
        from:'maheshbabucheema789@gmail.com',
        to:comment.user.email,
        subject:'New comment published',
        html:'<h1>Your comment created Successfuly</h1>'
    },(err,info)=>{
        if(err){
            console.log("error in sending mail:-",err);
            return;
        }

    })

}