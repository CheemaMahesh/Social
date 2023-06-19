const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port =8000;
const expressLayouts=require('express-ejs-layouts');
const bd=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');



app.use(express.urlencoded());
app.use(cookieParser());


app.use(express.static('./assets'));
app.use(expressLayouts);

//extract styles ans scripts from sub-pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//use ejs 
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name:'Coiedl',
    //TODO change the secret before deployment
    secret:"BLAAha",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }

}));


app.use(passport.initialize());
app.use(passport.session());


//use express router
app.use('/',require('./routs'));

//use express router(/profile)
// app.use('/profile',require('./routs'));

app.listen(port,function(err){
    if(err){
        // console.log("================Error:",err);
        console.log(`============Error ${err}`)
        return;
    }
    console.log(`Server is up and running on port ${port}`);
})