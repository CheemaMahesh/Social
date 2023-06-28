{

    let createPost=function(){
        let newPostForm=$('#new-post-form');
        newPostForm.submit(function(e){
            e.preventDefault();
            $.ajax({
                type:'post',
                url:'/posts/create',
                data:newPostForm.serialize(),
                success:function(data){
                    // console.log(data);
                    let newPost=newPostDom(data.data.post);
                    $('#posts-display>ol').prepend(newPost);
                    deletePost($(` .delete-post-button` ,newPost));
                },error:function(error){
                    console.log(error.responseText);
                }
            });
        });
    }

    //method to create a post in DOM

    let newPostDom=function(post){
        return $(`
        <li id="post-${post._id}" class="posts-display-ol-li">
        <span><a class="delete-post-button" href="/posts/destroy/${post._id}">X</a></span>
        
        ${post.content}<br>
       ${post.user.name}<br>


       <div class="post-comments-display">
       <ul id="post-comments-${post._id}" class="pcd" type="square">
                 
       </ul>
   </div>


        <div class="post-commentss">
            <form action="/comments/create"  method="POST">
                <input type="text"name="content" placeholder="Comment here.....">
                <input type="hidden" name="post" value="${post._id }">
                <!-- <input type="submit" value="Post"> -->
                <button name="comment">Comment</button>
            </form>
        </div>
    </li>



        `);
    }

    //method to delete a post from DOM
    let deleteFunction=function(deleteLink){
        $(deleteLink).click(function(e){
            e.preventDefault();
            $.ajax({
                type:'get',
                url:$(deleteLink).prop('href'),
                success:function(data){
                    $(`#post-${data.data.post_id}`).remove();

                },error:function(errorData){
                    console.log(errorData.responseText);

                }
            })

        })
    }



    createPost();
}