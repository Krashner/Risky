import {screenToMap} from "./coordinateConversion";

export default class InputHandler {
  constructor(camera, screen) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
        case 65:
            camera.moveLeft();
          break;
        case 39:
        case 68:
            camera.moveRight();
          break;
        case 38:
        case 87:
            camera.moveUp();
          break;
        case 40:
        case 83:
            camera.moveDown();
          break;
        case 17:
          //camera.zoom(1);
          break;
        case 16:
          //camera.zoom(-1);
          break;
        case 27:
          //camera.togglePause();
          break;
          case 32:
            // if(screen.name === "main")
            //   screen.screenManager.changeScreen("gameScreen");
              //screen.start();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
        case 65:
          if (camera.speed.x > 0) camera.stopHorizontal();
          break;
        case 39:
        case 68:
          if (camera.speed.x < 0) camera.stopHorizontal();
          break;
        case 38:
        case 87:
          if (camera.speed.y > 0) camera.stopVertical();
          break;
        case 40:
        case 83:
          if (camera.speed.y < 0) camera.stopVertical();
          break;
        default:
          break;
      }
    });

    //for zoom
    window.addEventListener("wheel", event => {
      camera.zoom(Math.sign(event.deltaY));
    });

    //mouseclick
    document.addEventListener("click", event => {
      if(screen.name !== "game")
        return;
        
      let rect = screen.canvas.getBoundingClientRect();
      //todo, send to server and then send back reply

      //mouse position relative to canvas
      let clickPosX = (event.clientX - rect.left) ;
      let clickPosY = (event.clientY - rect.top) ;

      let mapCoords = screenToMap(clickPosX, clickPosY, screen);

      screen.army.moveTo(mapCoords.x, mapCoords.y);
    });

  }
}
