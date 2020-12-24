class dustbin{
    constructor(x,y,width,height){
    var options= {
    friction : 1.5,
    density :10
    
    }
    this.body=Bodies.rectangle(x,y,height,width)
    this.width=width
    this.height=height
    }
    display(){
     var pos=this.body.position;
     push()
     translate(pos.x,pos.y) 
     
     rectMode(CENTER);
     fill("red");
     strokeWeight(4) ;
     
     rect(0,0,this.width, this.height);
     pop()
    
    
    
    
    
    }}