module.exports.profile=function(req,res){
    // return res.end('<h1>Users Profile Controler </h1>')

    return res.render('user_profile',{
        title:"User_Love_Profile"
    })
}