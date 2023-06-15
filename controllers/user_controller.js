module.exports.profile=function(req,res){
    // return res.end('<h1>Users Profile Controler </h1>')

    return res.render('user_profile',{
        title:"User_Love_Profile"
    })
}


//render the sign up page
module.exports.signup=function(req,res){
    return res.render('user_sign_up',{
        title:"Codieal | Sign Up"
    })
}



//render the sign in page
module.exports.signin=function(req,res){
    return res.render('user_sign_in',{
        title:"Codieal | Sign in"
    })
}


//get the sign up data
module.exports.create=function(req,res){
    //TODO
}


//sign in and create a session for the user
module.exports.createSession=function(req,res){

}