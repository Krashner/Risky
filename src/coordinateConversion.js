export function screenToMap(x, y, screen){

      //offset is the scale difference
      let offsetX = (screen.map.width * screen.camera.zoomFactor - screen.map.width);
      let offsetY = (screen.map.height * screen.camera.zoomFactor - screen.map.height);

      //subtract half the offset from the scaled position relative to the camera
      let cameraOffsetX = screen.camera.viewport.x * screen.camera.zoomFactor - offsetX / 2;
      let cameraOffsetY = screen.camera.viewport.y * screen.camera.zoomFactor - offsetY / 2;


      return {x: x/screen.camera.zoomFactor - cameraOffsetX/ screen.camera.zoomFactor,
              y: y/screen.camera.zoomFactor - cameraOffsetY/ screen.camera.zoomFactor}
}