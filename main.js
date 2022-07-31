var mouseEvent="empty";
var last_position_x,last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";

canvas.addEventListener('mousedown', my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener('mouseup', my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener('mouseleave', my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener('mousemove', my_mousemove);
function my_mousemove(e){
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
         
        console.log("Last position of x and y coordinates");
        console.log("x = "+last_position_x+" y = "+last_position_y);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("Current position of x and y coordinates");
        console.log("x = "+current_position_of_X+" y = "+current_position_of_Y);
        ctx.lineTo(current_position_of_X, current_position_of_Y);

        ctx.stroke();
    }
    last_position_x = current_position_of_X;
    last_position_y = current_position_of_Y;
}

