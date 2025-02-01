function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(20); 
}

function draw() {
    background(255, 70, 90, 25); 

    fill('aquamarine');
    stroke('white');
    
    for (var i = 100; i < 8080; i += 50) { 
        rect((i * 10) % width, (i * 10) % height, 10, 10);
    }

    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), 30, 30);

    fill('blue');
    stroke('yellow');
    
    if (mouseX < 370) {
        rect(mouseX, mouseY, 20, 20);
    } else {
        rect(mouseX, mouseY, 50, 50, 50);
    }
}
