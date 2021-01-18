class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.smokeImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x > 200 && this.body.velocity.x >10){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
    }
    console.log(this.trajectory);

    for(var index = 0; index <= this.trajectory.length - 1; index = index + 1){
    image(this.smokeImage, this.trajectory[index] [0], this.trajectory[index] [1])
    }
    super.display();

  }
}
