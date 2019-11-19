export default class Map{

    constructor(screen){
        this.image = document.getElementById("img_map");
        this.screen = screen;
        this.camera = screen.camera;
        this.width = this.image.width;
        this.height = this.image.height;
        this.position = {x: 0, y: 0};
        this.renderWidth = this.image.width;
        this.renderHeight = this.image.width;
    }

    update(deltaTime){

    }

    draw(ctx){
        //offset is the scale difference
        let offsetX = (this.width * this.camera.zoomFactor - this.width);
        let offsetY = (this.height * this.camera.zoomFactor - this.height);

        //subtract half the offset from the scaled position relative to the camera
        this.position.x = this.camera.viewport.x * this.camera.zoomFactor - offsetX / 2;
        this.position.y = this.camera.viewport.y * this.camera.zoomFactor - offsetY / 2;

        this.renderWidth =  this.width + offsetX;
        this.renderHeight = this.height + offsetY;

        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.renderWidth,
            this.renderHeight 
            );
    }

    getSizeDelta(){
        return {x: Math.abs(this.width -this.renderWidth), y: Math.abs(this.height -this.renderHeight) }
    }
}