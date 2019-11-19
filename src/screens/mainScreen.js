import Screen from "/src/screens/screen";

export default class MainScreen extends Screen{

    constructor(game){
        super(game);
        this.name ="main";
    }
    
    
    start(){
        
    }


    update(deltaTime){

    }

    draw(ctx){
        // ctx.rect(0,0,this.gameWidth,this.gameHeight);
        // ctx.fillStyle = "rgba(0,0,0,1)";
        // ctx.fill();

        // ctx.font = "30px Arial";
        // ctx.fillStyle = "white";
        // ctx.textAlign = "center";
        // ctx.fillText("Press SPACEBAR to Start", this.gameWidth/2, this.gameHeight/2);
    }
}