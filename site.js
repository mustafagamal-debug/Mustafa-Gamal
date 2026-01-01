const hello = document.getElementById("text");
const pio = document.getElementById("pio");

setInterval(() => {
    hello.style.opacity = "0";
    setTimeout(() => {
        if (hello.innerText === "Hello") {
            hello.innerText = "\u{1F917}";
            hello.style.fontSize = "80px";
            
        }
        else if (hello.innerText=== "\u{1F917}") {
            hello.innerText = "Press Continue";
            hello.style.fontSize = "35px";
            hello.style.top = "500px";
        }
        else {
            hello.innerText = "Hello";
            hello.style.fontSize = "80px";
            hello.style.top = "0px";
        }
        hello.style.opacity = "1";
    }, 500);
    
}, 1600);

function moveshape(){
    const shape=document.getElementById("shape");
    const welcomed=document.getElementById("hello");
    const btn=document.getElementById("click");
    const pio=document.getElementById("pio");
    const back=document.getElementById("back");
    shape.style.top= "40px";
    shape.style.left= "50px";
    shape.style.height= "1750px";
    shape.style.width= "90%";
    welcomed.style.opacity= "0";
    btn.style.opacity= "0";
    pio.style.opacity= "1";
    back.style.opacity= "1";
}

function back(){
    const shape=document.getElementById("shape");
    const welcomed=document.getElementById("hello");
    const btn=document.getElementById("click");
    const pio=document.getElementById("pio");
    const back=document.getElementById("back");
    shape.style.top= "650px";
    shape.style.left= "100px";
    shape.style.height= "500px";
    shape.style.width= "80%";
    welcomed.style.opacity= "1";
    btn.style.opacity= "1";
    pio.style.opacity= "0";
    back.style.opacity= "0";
}