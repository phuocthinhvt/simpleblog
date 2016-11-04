$("#document").ready(function(){
    var data
    request("blog/view","get",{},function(data){
        data = data.blog;
        localStorage.setItem("numblog",data.length);
        var html = "";
        for(i= 0;i<data.length;i++)
        {
            html += '<tr>'+'<td>'+data[i].subject+' '+'</td>'
                +'<td>' +data[i].author+' '+'</td>'
                +'<td>' +'<button id = "view_'+i+'" value ="'+data[i]._id+'">view</button>'+' '+'</td>'
                +'<td>' +'<button id ="edit_'+i+'" value ="'+data[i]._id+'">edit</button>'+' '+'</td>'
                +'<td>' + '<button id="delete_'+i+'" value ="'+data[i]._id+'" >delete</button>'+' '+'</td>' +'</tr>';

        }
        $('#subject').append(html);
        for(i= 0;i<data.length;i++) {
            $("#delete_"+i).click(function () {
                if(confirm("Are you sure to delete?")==true) {
                    request("blog/del/" + this.value, "delete", {}, function (data) {
                        alert("blog " + data.blog.subject + " has deleted successfully");
                        window.location.href = "/user";
                    })
                }
            });
            $("#edit_"+i).click(function () {
                localStorage.setItem("blogid",this.value);
                window.location.href = "/edit/"+ this.value;
            });
            $("#view_"+i).click(function () {
                request("blog/getblogcontent/"+this.value,"get",{}, function(data){
                    localStorage.setItem("blogcontent",data.blog.content);
                    window.location.href = "/view/"+data.blog._id;
                })
            })


        }
    })

    function request(url,type,data,onSuccess,onError){
        $.ajax({
            url:url,
            type:type,
            data:data||{},
            success:onSuccess,
            error:onError
        })
    };

    $("#signout").click(function(){
        request("/logout","post",{});
        window.location.href = "/";
    })

});




    