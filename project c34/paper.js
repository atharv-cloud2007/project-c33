class Rock{
    constructor(x,y,width,height) {
      var options = {
          'restitution':0,
          'friction':1.1,
          'density':0.5
      }
      this.width=width
      this.height=height 
      this.trajectory=[];
      this.body = Bodies.rectangle(x,y,20,20,options);
      this.image=loadImage("snow4.webp")
      World.add( world,this.body);
     
    }
    display(){
      var pos=this.body.position
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
      pop()
    }
  };
  