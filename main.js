let slideImg = document.getElementById('slide');
let images = new Array(
    "Cocoa.jpg",
    "cocoa5.jpg",
    "cocoa2.jpg",
    "cocoa3.jpg",
    "Cocoa4.png",
    "Cocoa1.jpg",
    
);

let len = images.length;
var i = 0;

function slider() {
    if(i > len-1){
        i = 0
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 8000);
}

function changeBackgroundColor(color){
    document.body.style.background = color;
}

function makeChange(){
    changeBackgroundColor("Black")
}