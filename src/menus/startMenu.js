import $ from "jquery";
import Menu from "/src/menus/menu";


export default class StartMenu extends Menu{

    constructor(game){
        super(game);
        this.name ="main";
        $("#start").html("Start!");

        // $('<button/>', {
        //     text: 'Start Game',
        //     id: 't',
        //     click: this.start
        // });

        document.getElementById("start").addEventListener("click", event => {this.start()});
    }
    
    
    start(){
        this.screenManager.changeScreen("gameScreen");
        document.getElementById("start").style.display = "none";
    }

    update(deltaTime){

    }

    draw(ctx){
        ctx.rect(0,0,this.gameWidth,this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        // ctx.font = "30px Arial";
        // ctx.fillStyle = "white";
        // ctx.textAlign = "center";
        // ctx.fillText("Press SPACEBAR to Start", this.gameWidth/2, this.gameHeight/2);
    }
}