// Fractal Tree
// -- ^ Coding train tutorial
//
// https://thecodingtrain.com/challenges/14-fractal-trees-recursive
// https://youtu.be/0jjeOYMjmDU
// -- Links

// Global angle to be used in draw loop
let angle = 0;

// slider variable that is used for interactivity
let slider;

function setup() {
	// create the canvas
	createCanvas(640, 360);

	// this is how to create the9anvas
	slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

// drawing every second
function draw() {
	// 0 means black in grayscale value system (0 to 255)
	// but if you enter 3 values then it makes color and not grayscale
	// clear background with sky color
	// I changed this to have a sky color
	background("#57BFD9");

	// slider value I put earlier getting value from it every iteration of drawing
	angle = slider.value();

	// for stroke color
	stroke(255);

	// stroke size
	strokeWeight(2);

	// moving position, first value is horizontal second value is vertical
	translate(width * 0.5, height);

	// this is calling function below
	branch(100);
}


// runs function to draw a branch of the tree
function branch(len) {
	// i made it so if the branches are less than 95 then its brown so they look like branches
	// and the rest look like leaves
	// and also I added that the stroke weight for branches is bigger

	if (len > 95) {
		stroke("#602700")
		strokeWeight(3)
	} else {
		strokeWeight(1)
		stroke("#57740D")
	}


	// draws a line
	line(0, 0, 0, -len);

	// moves positions to lenght height
	translate(0, -len);

	// only continues if branches to be drawn is more that 4
	if (len > 4) {

		// for translate
		push();

		// roates everthing by the angle we get from slider
		rotate(angle);

		// function again so repeats
		branch(len * 0.67);
		pop();
		push();

		// rotates everything
		rotate(-angle);

		// calles function again for other branch 
		branch(len * 0.67);
		pop();
	}
}
