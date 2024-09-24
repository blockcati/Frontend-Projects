const bodyel1 = document.querySelector("body");

bodyel1.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl1 = document.createElement("span");

    spanEl1.style.left = xPos +"px";
    spanEl1.style.top = yPos +"px";

    const size = Math.random()*100;
    spanEl1.style.width = size + "px";
    spanEl1.style.height = size + "px";
    
    
    bodyel1.appendChild(spanEl1);
    setTimeout(()=>{
        spanEl1.remove();

    },3000
)})