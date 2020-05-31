var x = 25;                                     //player
var y = 25;

var facing = "left";
var sprite = "document.getElementById('sprite')";
var input = document.getElementById("body");
input.addEventListener("keyup", function(event) { //s
    if (event.keyCode === 83) {
        event.preventDefault();
        document.getElementById("s").click();
    }
});
input.addEventListener("keydown", function(event) { //w
    if (event.keyCode === 87) {
        event.preventDefault();
        document.getElementById("w").click();
    }
});
input.addEventListener("keydown", function(event) { //d
    if (event.keyCode === 68) {
        event.preventDefault();
        document.getElementById("d").click();
    }
});
input.addEventListener("keydown", function(event) { //a
    if (event.keyCode === 65) {
        event.preventDefault();
        document.getElementById("a").click();
    }
});
input.addEventListener("keydown", function(event) { //spacebar
    if (event.keyCode === 32) {
        event.preventDefault();
        document.getElementById("space").click();
    }
});
function down(){
    if (y < 475){
    y = y + 75;
    document.getElementById('sprite').style.top = y;}
    facing = "down";
    document.getElementById('face').style.top = "98%";
    document.getElementById('face').style.left = "48%";
}
function up(){
    if (y > 26){
    y = y - 75;
    document.getElementById('sprite').style.top = y;}
    facing = "up";
    document.getElementById('face').style.top = "2%";
    document.getElementById('face').style.left = "48%";
}
function right(){
    if (x < 600){
    x = x + 78;
    document.getElementById('sprite').style.left = x;}
    facing = "right";
    document.getElementById('face').style.top = "48%";
    document.getElementById('face').style.left = "98%";

}
function left(){
    if (x > 26){
    x = x - 78;
    document.getElementById('sprite').style.left = x;}
    facing = "left";
    document.getElementById('face').style.top = "48%";
    document.getElementById('face').style.left = "2%";
}
function attack(){
    console.log(facing);
    console.log(x);
    if (facing === "left"){
     var temp = x - 78;
     if (ex == temp){
        console.log('attacked');
        ex = ex + 936;
        document.getElementById('enemy').style.left = ex;}
    }
    if (facing === "right"){
        var temp = x + 78;
        if (ex == temp){
           console.log('attacked');
           ex = ex + 936;
           document.getElementById('enemy').style.left = ex;}
       }
    if (facing === "down"){
        var temp = y + 75;
        if (ey == temp){
           console.log('attacked');
           ex = ex + 936;
           document.getElementById('enemy').style.left = ex;}
       }
    if (facing === "up"){
        var temp = y - 75;
        if (ey == temp){
           console.log('attacked');
           ex = ex + 936;
           document.getElementById('enemy').style.left = ex;}
       }
}


//spawning



//enemy 1
var ex;
var ey;
// top
var ey = Math.floor(Math.random() * 7);
ey = ey * 75;
ey = ey + 25;
document.getElementById('enemy').style.top = ey;


// left
var ex = Math.floor(Math.random() * 9);
ex = ex * 78;
ex = ex + 25;
document.getElementById('enemy').style.left = ex;
console.log(ex);

function foo() {

    console.log('2')
    //distance
    dx = Math.abs(ex - x);
    dy = Math.abs(ey - y);

    //enemy1 moment
    if (dx > dy){
        if (ex > x){
            ex = ex - 78;
            document.getElementById('enemy').style.left = ex;      //x movement
        }
        if (ex < x){
            ex = ex + 78;
            document.getElementById('enemy').style.left = ex;
        }
    }
    else if (dy > dx){
        if (ey > y){
            ey = ey - 75;
            document.getElementById('enemy').style.top = ey;      //y movement
        }
        if (ey < y){
            ey = ey + 75;
            document.getElementById('enemy').style.top = ey;
        }
    }
    if (y == ey && x == ex){
        window.alert('you lost');
    }



    setTimeout(foo, 500);
}

foo()