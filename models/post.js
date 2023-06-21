const mongoose=require('mongoose');

const postShema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
   user: {
        user:mongoose.Schema.Types.ObjectId,
        ref:user
    }
},{
    timestamps:true
});

const Post=mongoose.model('Post',postShema);


module.exports=Post;