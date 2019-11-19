export default class Army{
    
    constructor(screen){
        this.image = document.getElementById("img_soldier");
        this.screen = screen;
        this.map = screen.map;
        this.camera = screen.camera;
        this.width = this.image.width;
        this.height = this.image.height;
        this.position = {x:10, y:10};
        this.soldiers = 1;
        this.destination ={x:10, y:10};
    }

    start(){

    }


    update(deltaTime){

        if(Math.abs(this.position.x - this.destination.x) <0.01 && Math.abs(this.position.y - this.destination.y) <0.01)
        {
            this.position = this.destination;
        }else{
            this.position.x = this.lerp(this.position.x, this.destination.x, 0.1);
            this.position.y = this.lerp(this.position.y, this.destination.y, 0.1)
        }
    }

    draw(ctx){
        let offsetX =(this.width * this.camera.zoomFactor - this.width);
        let offsetY = (this.height * this.camera.zoomFactor - this.height);

        //draw relative to map position
        ctx.drawImage(
            this.image,
            this.position.x * this.camera.zoomFactor + this.map.position.x - (this.width + offsetX)/2,
            this.position.y * this.camera.zoomFactor + this.map.position.y - (this.height + offsetY)/2,
            this.width + offsetX,
            this.height + offsetY 
            );

            let textPosition = {x:0, y:0};

            textPosition.x = this.map.position.x + this.position.x * this.camera.zoomFactor - (this.width + offsetX)/2;
            textPosition.y = this.map.position.y + this.position.y * this.camera.zoomFactor - (this.height + offsetY)/2;    

            //draw number of troops
            this.drawStroked(ctx, this.soldiers, 20 * this.camera.zoomFactor, textPosition.x + this.width/ 2 * this.camera.zoomFactor,
                textPosition.y + this.height * 2 * this.camera.zoomFactor);

    }

    //set the destination to move to, todo, check for nearest open node
    moveTo(x, y){
        this.destination = {x, y};
    }

    lerp(from, to, step) {
        return from*(1-step)+to*step;
    }

    //https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
    drawStroked(ctx, text, size, x, y) {
        ctx.font = size+'px Sans-serif';
        ctx.textAlign = "center";
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = 'white';
        ctx.fillText(text, x, y);
    }
}