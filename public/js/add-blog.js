/**
 * Created by gumivietnam on 11/4/16.
 */
$('#save').click(function(){
    $.ajax({
        url: "/blog/add",
        type:"post",
        data: {
            author : $('#author').val(),
            subject : $('#subject').val(),
            content:$('#content').val(),
            comment:$('#comment').val()
        }
    }).done(function(data){
            alert("create blog successfully");
            window.location.href = "/user";
        }

    );
})