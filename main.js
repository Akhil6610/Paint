var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mousEvt="empty";
var colour= "red";
var linewidth=2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousEvt="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mousEvt="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mousEvt="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    mousEvt="mousemove";
    var currentmousex=e.clientX - canvas.offsetLeft; 
    var currentmousey=e.clientY - canvas.offsetTop;
    if (mousEvt=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=linewidth;
        ctx.moveTo(lastmouseX,lastmouseY);
        ctx.lineTo(currentmousex,currentmousey);
        ctx.stroke();
    }
    lastmouseX=currentmousex;
    lastmouseY=currentmousey;

}