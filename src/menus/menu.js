import $ from "jquery";

export default class Screen{
    

    constructor(game){
        this.game = game;
        this.screenManager = game.screenManager;
        this.menuManager = game.menuManager;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.canvas = game.canvas;
        this.buildInterface();       
        $('#user_interface_container').css({"maxWidth":this.game.gameWidth +"px" , "maxHeight":this.game.gameHeight +"px"});
    }

    start(){
        
    }

    buildInterface(){

    }

    destroyInterface(){
        
    }


    update(deltaTime){

    }

    draw(ctx){

    }
}