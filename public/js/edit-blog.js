$(document).ready(function(){
    id = localStorage.getItem("blogid");
    $.ajax({
        url: "/blog/getblog/"+id,
        type:"get",
    }).done(function(data){
        $("#author").val(data.blog.author);
        $("#subject").val(data.blog.subject);
        $("#content").val(data.blog.content);
        $("#comment").val(data.blog.comment);
    }
    );
})

$("#edit").click(function(){
    id = localStorage.getItem("blogid");
    $.ajax({
        url:"/blog/upd/"+id,
        type : "put",
        data:{
            author : $("#author").val(),
            subject : $("#subject").val(),
            content : $("#content").val(),
            comment : $("#comment").val(),
        }
    }).done()
})    