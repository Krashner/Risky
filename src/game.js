import ScreenManager from "/src/managers/screenManager";
import MenuManager from "/src/managers/menuManager";

export default class Game{

    constructor(gameWidth, gameHeight, canvas){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.canvas = canvas;
        this.screenManager = new ScreenManager(this);
        this.menuManager = new MenuManager(this);
        this.screenManager.changeScreen("mainScreen");
        this.menuManager.changeMenu("startMenu");
    }

    // start(){
    //     this.screenManager.changeScreen("gameScreen");
    //     document.getElementById("start").style.display = "none";
    // }


    update(deltaTime)
    {
        this.menuManager.update(deltaTime);
        this.screenManager.update(deltaTime);
    }

    draw(ctx)
    {
        this.menuManager.draw(ctx);
        this.screenManager.draw(ctx);
    }
}