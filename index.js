const express=require('express');
const app=express();
const port =8000;
const expressLayouts=require('express-ejs-layouts');


app.use(express.static('./assets'));
app.use(expressLayouts);

//extract styles ans scripts from sub-pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router
app.use('/',require('./routs'));

//use ejs 
app.set('view engine','ejs');
app.set('views','./views')

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