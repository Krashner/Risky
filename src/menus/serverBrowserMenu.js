import $ from "jquery";
import Menu from "/src/menus/menu";


export default class ServerBrowserMenu extends Menu{

    constructor(game){
        super(game);
        this.name ="server";
        //$("#server_menu_container").attr({"max-width" : game.gameWidth, "max-height" : game.gameHeight});
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
        let menuContainer = '<div id="server_menu_container"></div>';
        $("#user_interface_container").append(menuContainer);

        let title = '<h2 id="browser_header">Server Browser</h2>';
        $("#server_menu_container").append(title);

        let searchbar = '<div id="searchbar">Find Room: <input id="search_input" type="text" name="servName"> <button id="search_btn">Search</button</div>';
        $("#server_menu_container").append(searchbar);

        // let startButton = '<button id="start_btn">Start A Game</button>';
        // $("#server_menu_container").append(startButton);
        // $("#start_btn").on("click", () => {this.startGame()});

        // let joinButton = '<button id="join_btn">Join A Game</button>';
        // $("#server_menu_container").append(joinButton);
        // $("#join_btn").on("click", () => {this.joinGame()});

        let serverList = '<ul id="server_list"></ul>';
        $("#server_menu_container").append(serverList);

        for(var i =0; i< 50; i++){
            let serverButton = '<li class="server_li" ><button class="server_btn" >Join Me!</button></li>';
            $("#server_list").append(serverButton);
        }

        $('#server_list').css({"maxHeight":this.game.gameHeight * 0.80 +"px"});
    }

    destroyInterface(){
        $("#user_interface_container").empty();
    }

    update(deltaTime){

    }

    draw(ctx){

    }
}