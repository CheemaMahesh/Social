const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

//import user
const User=require('../models/user');


//authentication useing passport
passport.use(new LocalStrategy({
    usernameField:'email'
},function(email,password,done){

User.findOne({email:email}).then((user)=>{


    if(!user||user.password!=password){
            console.log("Invalid Username or Password");
            return done(null,false);
    }
    return done(null,user);



}).catch((err)=>{
    if(err){
        console.log("error in finding=================> passport");
        return done(err);
    }
})

}

));


//serializing the user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//deserializing the user from the key in the cookie


passport.deserializeUser(function(id,done){
    User.findById(id).then((user)=>{
        return done(null,user);

    }).catch((err)=>{
        if(err){
            console.log("error in finding======> passport2222222222");
            return done(err);

        }

    })
})



module.exports=passport;
