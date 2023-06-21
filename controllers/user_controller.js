const User=require('../models/user');

module.exports.profile=function(req,res){
    // return res.end('<h1>Users Profile Controler </h1>')

    return res.render('user_profile',{
        title:"User_Love_Profile"
    })
}


//render the sign up page
module.exports.signup=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up',{
        title:"Codieal | Sign Up"
    });
    
}



//render the sign in page
module.exports.signin=function(req,res){

    
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title:"Codieal | Sign in"
    })
}


//get the sign up data
module.exports.create=function(req,res){
if(req.body.password!=req.body.conform_password){
    return res.redirect('back');
}

// User.findOne({email:req.body.email}
//     ,function(err,user){
//     if(err){
//         console.log("error in finding user in sign up"); return;
//     }

//     if(!user){
//         User.create(req.body, function(err,user){
//             if(err){
//                 console.log("error in creating user in sign up"); return;
//             }

//             return res.redirect('/users/sign-in');
//         })
//     }else{
//         return res.redirect('back');

//     }

// })


User.findOne({email:req.body.email}).then((email)=>{


        if(!email){
        User.create(req.body).then(()=>{
            return res.redirect('/users/sign-in');
        })
    }else{
        return res.redirect('back');

    }

})


}


//sign in and create a session for the user
module.exports.createSession=function(req,res){
    return res.redirect('/');
}


//sign out and destroying the sesssion
module.exports.destroySession=function(req,res){
req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });

    // return res.redirect('/');
}