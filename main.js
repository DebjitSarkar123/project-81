canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.linewidth=4;
ctx.rect(150,143,430,200,);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.linewidth=5;
ctx.rect(250,210,40,0,2* Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.linewidth=5;
ctx.rect(350,210,40,0,2* Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="red";
ctx.linewidth=5;
ctx.rect(450,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.linewidth=5;
ctx.rect(450,210,40,0,2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.linewidth=5;
ctx.rect(550,210,40,0,2* Math.PI);
ctx.stroke();

