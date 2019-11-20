import $ from "jquery";
import Menu from "/src/menus/menu";


export default class StartMenu extends Menu{

    constructor(game){
        super(game);
        this.name ="main";
        //$("#main_menu_container").attr({"max-width" : game.gameWidth, "max-height" : game.gameHeight});
    }
    
    startGame(){
        this.screenManager.changeScreen("gameScreen");
        this.destroyInterface();
        this.menuManager.changeMenu("gameMenu");
    }

    swapToServerBrowser(){
        this.menuManager.changeMenu("serverBrowserMenu");
    }

    buildInterface(){
        let menuContainer = '<div id="main_menu_container"></div>';
        $("#user_interface_container").append(menuContainer);
        
        let startButton = '<button id="start_btn">Create Room</button>';
        $("#main_menu_container").append(startButton);
        $("#start_btn").on("click", () => {this.startGame()});

        let servBrowserButton = '<button id="server_browser_btn">Server Browser</button>';
        $("#main_menu_container").append(servBrowserButton);
        $("#server_browser_btn").on("click", () => {this.swapToServerBrowser()});
    }

    destroyInterface(){
        $("#user_interface_container").empty();
    }

    update(deltaTime){

    }

    draw(ctx){

    }
}