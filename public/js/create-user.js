$("#document").ready(function(){
    $('#save').click(function(){
        $.ajax({
            url: "/create-user",
            type:"post",
            data: {
                email : $('#email').val(),
                password : $('#password').val(),
                fullname:$('#fullname').val(),
                country:$('#country').val()
            },
            success:function(data){
                alert("user has created successfully")
                window.location.href = "/"
            }

        })
    })
});
    