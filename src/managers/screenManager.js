import  GameScreen from "/src/screens/gameScreen";
import  MainScreen from "/src/screens/mainScreen";

export default class ScreenManager{
    
    constructor(game){
        this.game = game;
        this.screens = {
            "gameScreen": GameScreen,
            "mainScreen": MainScreen
        }
    }

    changeScreen(screen){
        this.currentScreen = new this.screens[screen](this.game);
    }

    update(deltaTime){
        if(this.currentScreen !== undefined)
            this.currentScreen.update(deltaTime);
    }

    draw(ctx){
        if(this.currentScreen !== undefined)
            this.currentScreen.draw(ctx);
    }

}