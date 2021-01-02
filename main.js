console.log("manul: captain america left hand=c,hulk face=h+f,hulk left hand=h+l+a,hulk legs=h+e,hulk right hand=h+r+a,ironman body=i+b,ironman face=i+f,ironman left hand =i+l+h,ironman legs=i+e,ironman right hand=i+r+h,spiderman body=s+b,spiderman face=s+f,spiderman left hand= s+l+h,spiderman legs=s+e,spiderman right hand=s+r+h,thor face=t+f,thor left hand=t+l+h,thor right hand=t+r+h");

var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
var playerobject="";
blockheight=30;
blockwidth=30;
function playeruptade(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHieght(140);
        playerobject.set({top:player_y,left:player_x});
        canvas.add(playerobject);
    });
    function newImage(IMG1){fabric.Image.fromURL(IMG1,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({top:player_y,left:player_x});
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",key);

function key(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=='80'){
        console.log("p and shift pressed together") 
        blockheight=blockheight +10;
        blockwidth=blockwidth +10;
        document.getElementById("current_height").innerHTML=blockheight;
        document.getElementById("current_width").innerHTML=blockwidth;
    }
    if (e.shiftKey==true && keypress=='77'){
        console.log("m and shift pressed together") 
        blockheight=blockheight -10;
        blockwidth=blockwidth -10;
        document.getElementById("current_height").innerHTML=blockheight;
        document.getElementById("current_width").innerHTML=blockwidth;
    } 
 if (keypress=='38')   {
     up();console.log("up");
 }
 if (keypress=='40')   {
    down();console.log("down");
}
if (keypress=='37')   {
    left();console.log("left");
}if (keypress=='38')   {
    right();console.log("right");
}
if (keypress =='67'){
    newImage("captain_america_left_hand.png");
    console.log("c");
}
if (keypress =='72'&&'70'){
    newImage("hulk_face.png");
    console.log("hf");
}
if (keypress =='72'&&'76'&&'65'){
    newImage("hulk_left_hand.png");
    console.log("hla");
}
if (keypress =='72'&&'69'){
    newImage("hulk_legs.png");
    console.log("he");
}
if (keypress =='72'&&'82'&&'65'){
    newImage("trunk.jpg");
    console.log("hra");
}
if (keypress =='72'&&'66'){
    newImage("hulkd_body.png");
    console.log("hb");

}
if (keypress =='73'&&'66'){
    newImage("ironman_body.png");
    console.log("ib");
}if (keypress =='73'&&'72'){
    newImage("ironman_face.png");
    console.log("if");
}
if (keypress =='73'&&'76'&&'72'){
    newImage("ironman_left_hand.png");
    console.log("ilh`");
}if (keypress =='72'&&'69'){
    newImage("ironman_legs.png");
    console.log("ie");
}if (keypress =='72'&&'82'&&'72'){
    newImage("ironman_right_hand.png");
    console.log("irh");
}if (keypress =='83'&&'66'){
    newImage("spiderman_body.png");
    console.log("sb");
}if (keypress =='83'&&'70'){
    newImage("spiderman_face.png");
    console.log("sf");
}if (keypress =='83'&&'76'&&'72'){
    newImage("spiderman_left_hand.png");
    console.log("slh");
}if (keypress =='83'&&'69'){
    newImage("spiderman_legs.png");
    console.log("se");
}if (keypress =='83'&&'82'&&'72'){
    newImage("spiderman_right_hand.png");
    console.log("srh");
}if (keypress =='84'&&'70'){
    newImage("thor_face.png");
    console.log("tf");
}if (keypress =='84'&&'82'&&'72'){
    newImage("thor_right_hand.png");
    console.log("trh");
}if (keypress =='84'&&'76'&&'72'){
    newImage("thor_left_hand.png");
    console.log("tlh");
}
}