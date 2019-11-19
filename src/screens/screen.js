import InputHandler from "/src/input";
import Camera from "/src/camera";

export default class Screen{
    

    constructor(game){
        this.game = game;
        this.screenManager = game.screenManager;
        this.menuManager = game.menuManager;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.canvas = game.canvas;
        this.camera = new Camera(this);
        new InputHandler(this.camera, this);
    }

    start(){
        this.camera.reset();
    }


    update(deltaTime){

    }

    draw(ctx){

    }
}