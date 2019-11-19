import Screen from "/src/screens/screen";
import Map from "/src/map";
import Army from "/src/army";
import Clock from "/src/clock";

export default class GameScreen extends Screen{

    constructor(game){
        super(game);
        this.name = "game";
        this.map = new Map(this);
        this.army = new Army(this);
        this.clock = new Clock(this);
        this.gameObjects =[];
    }

    start(){
       
    }


    update(deltaTime){
  
        this.map.update(deltaTime);
        this.camera.update(deltaTime);
        this.clock.update(deltaTime);
        this.army.update(deltaTime);
    }

    draw(ctx){
        //[...this.gameObjects].forEach((object) => object.draw(ctx));
        //this.camera.draw(ctx);
        this.map.draw(ctx);
        this.army.draw(ctx);
        this.clock.draw(ctx);
    }
}