import StartMenu from "/src/menus/startMenu";

export default class MenuManager{
    
    constructor(game){
        this.game = game;
        this.menus = {
            "startMenu": StartMenu
        }
    }

    changeMenu(menu){
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