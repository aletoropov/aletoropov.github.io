function startGet(){
    $.ajax({
        type: "GET",
        url: "http://jsonplaceholder.typicode.com/posts/1",
        success: function(data){
            var container = document.getElementsByTagName("h1")[0];
            container.innerHTML = data.title;
        }
    });
};