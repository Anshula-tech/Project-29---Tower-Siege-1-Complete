
class Box extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
    }
    display(){
        super.display();
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        // if(this.body.speed>3){
        //   World.remove(world, this.body)
        // }
    }
  };
 