export default class Clock {
  constructor(screen) {
    this.screen = screen;
    this.camera = screen.camera;
    this.position = { x: 10, y: 10 };
    this.renderPosition = { x: 0, y: 0 };

    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    this.day = 1;
    this.monthIndex = 0;
    this.year = 1443;
   
    this.tick();
  }

  start() {

  }

  tick(){
        this.day++;
        setTimeout(this.tick.bind(this), 3000);
  }

  update(deltaTime) {

    if(this.day > this.daysInMonths[this.monthIndex])
    {
      this.monthIndex++;
      if(this.monthIndex > this.daysInMonths.length - 1){
        this.monthIndex = 0;
        this.year++;
      }
      this.day = 1;
    }
  }

  draw(ctx) {
    this.drawStroked(ctx, this.day, 20, 15, 30);
    this.drawStroked(ctx, this.months[this.monthIndex] + ", ", 20, 15 + 80, 30);
    this.drawStroked(ctx, this.year, 20, 15 + 160, 30);
  }

  //https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
  drawStroked(ctx, text, size, x, y) {
    ctx.font = size + "px Sans-serif";
    ctx.textAlign = "center";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = "white";
    ctx.fillText(text, x, y);
  }
}
