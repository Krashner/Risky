import StartMenu from "/src/menus/startMenu";
import ServerBrowserMenu from "/src/menus/serverBrowserMenu";

export default class MenuManager{
    
    constructor(game){
        this.game = game;
        this.menus = {
            "startMenu": StartMenu,
            "serverBrowserMenu": ServerBrowserMenu
        }
    }

    changeMenu(menu){
        if(this.currentMenu !== undefined)
            this.currentMenu.destroyInterface();
        delete this.currentMenu;
        if(this.menus[menu] !== undefined)
            this.currentMenu = new this.menus[menu](this.game);
    }

    update(deltaTime){
        if(this.currentMenu !== undefined)
            this.currentMenu.update(deltaTime);
    }

    draw(ctx){
        if(this.currentMenu !== undefined)
            this.currentMenu.draw(ctx);
    }

}