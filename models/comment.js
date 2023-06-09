const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    content:{
        type:'String',
        required:true
    },
    //comments belongs to the user
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //comments belogs to the post
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
},{
    timestamps:true
});


const Comment=mongoose.model('Comment',commentSchema);

module.exports=Comment;