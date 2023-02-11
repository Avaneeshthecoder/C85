var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var rover_width = 100
var rover_height = 90
var rover_x = 10
var rover_y = 10
var bg_img = "mars.jpg"
var rover_img = "rover.png"
var NASA_img = ["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630920503652E02_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630200503580E02_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044630970503657E01_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631220503682E01_DXXX.jpg"]
var rn = Math.floor(Math.random()*4)
bg_img = NASA_img[rn]
function add() {
    bg_tag = new Image()
    bg_tag.onload = upload_bg
    bg_tag.src = bg_img
    rover_tag = new Image()
    rover_tag.onload = upload_rover
    rover_tag.src = rover_img
}
function upload_bg() {
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height)
}
function upload_rover() {
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height)
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
    key_pressed = e.keyCode
    console.log(key_pressed)
    if (key_pressed == "40") {
        down()
    }
    if (key_pressed == "38") {
        up()
    }
    if (key_pressed == "39") {
        right()
    }
    if (key_pressed == "37") {
        left()
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
         upload_bg(); upload_rover();
    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
         upload_bg(); upload_rover();
    }
}
function right() {
    if (rover_x <= 750) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
         upload_bg(); upload_rover();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed,  x = " + rover_x + " | y = " + rover_y);
         upload_bg(); upload_rover();
    }
}
