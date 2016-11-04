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
                +'<td>' +'<button id = "view_'+i+'" value ="'+data[i]._id+'">view</button>'+' '+'</td>'+'</tr>';
        }
        $('#subject').append(html);
        for(i= 0;i<data.length;i++) {
            $("#view_"+i).click(function () {
                request("blog/getblogcontent/"+this.value,"get",{},
                    function(data){
                        localStorage.setItem("blogcontent",data.blog.content);
                        window.location.href = "/view/"+data.blog._id;
                    })
            })
        }
    })

});

function request(url,type,data,onSuccess,onError){
    $.ajax({
        url:url,
        type:type,
        data:data||{},
        success:onSuccess,
        error:onError
    })
};

function login(){
    if(!$("#email").val()  || !$("#password").val()){
        alert("user and password must not empty")
    }
    else{
        request("/checklogin","post",
            {
                email:$("#email").val(),
                password:$("#password").val()
            },function(data){
                if(data.page==="blog"){
                    window.location.href = "/user";
                }
                else{
                    alert("user or password is not correct")
                    window.location.href = "/"

                }
            }
        )
    }

}


    