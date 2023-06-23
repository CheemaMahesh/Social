const Post=require('../models/post');
const Comment=require('../models/comment');

// module.exports.home=function(req,res){
// Post.find({}).populate('user').populate({path:'comments',pupulate:{path:'user'}})
// .exec(function(err,posts){
//   return res.render('home',{
//         title:'Home',
//         post:posts
//     });

// })

    
// }



// module.exports.home = async function (req, res) {
//     try {
//       const posts = await Post.find({}).populate('user').exec();
//       const comments = await Comment.find({}).populate('user').exec();



//       return res.render('home', {
//         title: 'Home',
//         posts: posts,
//         comments:comments
//       });
//     } catch (err) {
//       console.error(err);
//       // Handle error response
//     }
//   }





// const Post = require('../models/post');

module.exports.home = async function (req, res) {
  try {
    const posts = await Post.find({})
      .populate('user')
      .populate({ path: 'comments', populate: { path: 'user' } })
      .exec();

    return res.render('home', {
      title: 'Home',
      posts: posts,
    });
  } catch (err) {
    console.log("Error in fetching posts:", err);
    // Handle the error response appropriately
  }
};
