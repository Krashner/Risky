export default class Screen{
    

    constructor(game){
        this.game = game;
        this.screenManager = game.screenManager;
        this.menuManager = game.menuManager;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.canvas = game.canvas;
        this.buildInterface();
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