import $ from "jquery";
import Menu from "/src/menus/menu";


export default class ServerBrowserMenu extends Menu{

    constructor(game){
        super(game);
        this.name ="server";
    }
    
    startGame(){
        this.screenManager.changeScreen("gameScreen");
        this.destroyInterface();
    }

    joinGame(){
        this.screenManager.changeScreen("gameScreen");
        this.destroyInterface();
        this.menuManager.changeMenu("gameMenu");
    }


    buildInterface(){
        let menuContainer = '<div id="main_menu_container"></div>';
        $("#user_interface_container").append(menuContainer);
        
        let startButton = '<button id="start_btn">Start A Game</button>';
        $("#main_menu_container").append(startButton);
        $("#start_btn").on("click", () => {this.startGame()});

        let joinButton = '<button id="join_btn">Join A Game</button>';
        $("#main_menu_container").append(joinButton);
        $("#join_btn").on("click", () => {this.joinGame()});
    }

    destroyInterface(){
        $("#user_interface_container").empty();
    }

    update(deltaTime){

    }

    draw(ctx){

    }
}