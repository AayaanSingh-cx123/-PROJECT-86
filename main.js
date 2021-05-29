var canvas= new fabric.canvas('myCanvas');

var player_object= "";
 
player_x=10;
player_y=10;

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            Left:player_x,
        }) ;
        canvas.add(player_object);
    })
}
var block_img_object= "";
 block_img_object_width= 30;
 block_img_object_height= 30;
 function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth( block_img_object_width);
        block_img_object.scaleToHeight( block_img_object_height);
        block_img_object.set({
            top:player_y,
            Left:player_x,
        }) ;
        canvas.add(block_img_object);
    })
}
va