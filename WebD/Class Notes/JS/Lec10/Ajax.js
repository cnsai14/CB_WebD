
$(document).ready(function() {

    let result = $('#result');
    let btn = $('#btn');
    let url='http://reduxblog.herokuapp.com/api/posts?key="CV"';


    $.get(url,function(data){
        console.log(data);
        renderDetail(data);
    });

    btn.click(function(){
        makePost();
    })

    function makePost(){
        $.ajax({
            url:url,
            method :'POST',
            data:{
                id:13,
                title: "JAI BAJRANGBALI",
                categories : "CB",
                content :'Second Blog'
            }

        })
    }
});




