canvas=document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d");

height=100;//Give specific height and width to the car image
width=75;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gc_x=5;
gc_y=250;
//Set initial position for a car image.

function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src= background_image;
	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src= greencar_image;
	
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag,gc_x,gc_y,width,height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gc_y >0)
	{
		gc_y=gc_y - 10;
		console.log("when up arrow is pressed,x="+ gc_x+"y="+gc_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()

{
	if(gc_y < 350)
	{	gc_y=gc_y + 10;
	console.log("when down arrow is pressed,x="+ gc_x+"y="+gc_y);
	uploadBackground();
	uploadgreencar();
}
	//Define function to move the car downward
}

function left()
{
	if(gc_x > 0)
	{	gc_x=gc_x - 10;
	console.log("when left arrow is pressed,x="+ gc_x+"y="+gc_y);
	uploadBackground();
	uploadgreencar();
	}
}//Define function to move the car left side


function right()
{
	if(gc_x < 750)
	{	gc_x=gc_x + 10;
	console.log("when right arrow is pressed,x="+ gc_x+"y="+gc_y);
	uploadBackground();
	uploadgreencar();
	}
	//Define function to move the car right side
}

			//Define function to move the car right side
	
