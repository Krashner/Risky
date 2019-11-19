export default class Camera{

        constructor(game){
            this.game = game;
            this.gameWidth = game.gameWidth;
            this.gameHeight = game.gameHeight;
            this.viewport = {x: 0, y: 0, width: this.gameWidth, height: this.gameHeight};
            this.center ={x: 0, y:0}
            this.maxSpeed = 10;
            this.zoomFactor = 1;
            this.speed = {x: 0, y:  0};

            this.offsetX = 0;
            this.offsetY = 0;

        }

        //reset all values
        reset(){
            this.viewport = {x: 0, y: 0, width: this.gameWidth, height: this.gameHeight};
            this.center ={x: 0, y:0}
            this.maxSpeed = 10;
            this.zoomFactor = 1;
            this.speed = {x: 0, y:  0};
            this.offsetX = 0;
            this.offsetY = 0;
        }
    
        update(deltaTime){
            this.viewport.x += this.speed.x;
            this.viewport.y += this.speed.y;
            this.center = {x: this.viewport.x + this.viewport.width/2, y: this.viewport.y + this.viewport.height/2}

            
        /*
            //right bounds
            if(this.viewport.x < -(this.game.map.width - this.gameWidth/2)) {
                this.viewport.x =  -(this.game.map.width - this.gameWidth/2);
            }

            //left bounds
            if(this.viewport.x > this.gameWidth/2) {
                this.viewport.x = this.gameWidth/2;

            }
            
            //bottom bounds
            if(this.viewport.y < -(this.game.map.height - this.gameHeight/2)) {
                this.viewport.y =  -(this.game.map.height - this.gameHeight/2);
            }

            //top bounds
            if(this.viewport.y > this.gameHeight/2) {
                this.viewport.y = this.gameHeight/2;
            }
*/
        }

        moveLeft(){
            this.speed.x = this.maxSpeed;
            this.offsetX+= this.maxSpeed;
        }

        moveRight(){
            this.speed.x = -this.maxSpeed;
            this.offsetX-= this.maxSpeed;
        }
    
        moveUp(){
            this.speed.y = this.maxSpeed;
            this.offsetY++;
        }

        moveDown(){
            this.speed.y = -this.maxSpeed;
            this.offsetY--;
        }

        stopHorizontal(){
            this.speed.x = 0;
        }

        stopVertical(){
            this.speed.y = 0;
        }

        zoom(value){
            let factor = this.zoomFactor + value * 0.1;           
            if(factor > 0.1 &&  factor < 5)
                this.zoomFactor = factor;
        }

        draw(ctx){
          //  ctx.setTransform(1,0,0,1,0,0);
           // ctx.translate(this.offsetX, this.offsetY);
            // clear the viewport
          //  ctx.clearRect(-this.offsetX, -this.offsetY, this.gameWidth, this.gameHeight);
        }

}