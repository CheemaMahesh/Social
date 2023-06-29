module.exports.index=function(req,res){
    return res.status(200).json({
        message:'list of posts',
        mail:'maheshbabucheema789@gmail.com',
        posts:[]
    });
}



