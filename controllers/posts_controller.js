const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.create=function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    }).then((post)=>{
        return res.redirect('back')
    }).catch((err)=>{
        if(err){console.log("error in creating a post"); return}
    })
}


// module.exports.destroy=function(req,res){
//     Post.findById(req.params.id).then((post)=>{

//         //.id means converting the object id into string
//         if(post.user==req.user.id){

//             post.remove();
//             Comment.deleteMany({post:req.params.id}).then((mahi)=>{
//                 return res.redirect('back');
//             });

//         }else{
//             return res.redirect('back');
//         }


//     }).catch((err)=>{

//         if(err){
//             console.log("error in deleting a post",err);
//         }

//     })
// }




module.exports.destroy = async function (req, res) {
    try {
      const post = await Post.findById(req.params.id);
  
      if (!post) {
        return res.redirect('back');
      }
  
      // Check if the current user is the owner of the post
      if (post.user.toString() === req.user.id) {

        //this deleteone is insted of post.remove();
        await post.deleteOne();
        await Comment.deleteMany({ post: req.params.id });
  
        return res.redirect('back');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log("Error in deleting a post:", err);
      // Handle the error response appropriately
    }
  };