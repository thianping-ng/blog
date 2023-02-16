const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', ()=> {
    navbar.classList.toggle('active')
})

$(document).ready(function(){

    const url = "https://interactivedev-2483.restdb.io/rest/useraccount";
    const apikey = "63b429ec969f06502871a8e8";

    $("#button").on("click", function(e){
        e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();

    console.log(name)
    console.log(email)
    console.log(password)


    let jsondata = {
        "name":name,
        "email":email,
        "password":password
    }

    let setting = {
        "async":true,
        "crossDomain":true,
        "url": url,
        "method":"post",
        "headers":{
            "content-type":"application/json",
            "x-apikey":apikey,
            "cache-control":"no-cache"
        },
        "processData":false,
        "data":JSON.stringify(jsondata)
    }

    $.ajax(setting).done(function (res){
        console.log(res);

        $(".forms").trigger("reset");
        })

    })

    getdata()

    function getdata(){
        let setting = {
            "async":true,
            "crossDomain":true,
            "url": url,
            "method":"get",
            "headers":{
                "content-type":"application/json",
                "x-apikey":apikey,
                "cache-control":"no-cache"
            },
        }
    
        $.ajax(setting).done(function (res){
            console.log(res)
            let content = "";
                for (var i = 0; i < res.length; i++){
                    content += `${content}
                        <td>${res[i].name}</td>
                        <td>${res[i].email}</td>
                        <td>${res[i].password}</td>
                    `    
                }
                $(".table tbody").html(content);
            })
        }
    })
