document.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByClassName("img-thumbnail");
    for (let image in images){
        images[image].addEventListener("click", function(){
            source = images[image].getAttribute("src");
            console.log(source);
            source = source.replace("small", "large");
            console.log(`new source: ${source}`);
            var element = document.createElement("span");
            element.setAttribute("class", "img-popup");
            element.innerHTML = `<img src=${source}>`;
            images[image].insertAdjacentElement("afterend", element);
            //message = `You clicked on images\/${images[image].alt}.jpg`;
            //console.log(message);
        });
    }
    //registerEventListeners();
});