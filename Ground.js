class Ground{
    constructor(x,y,width, height){
        var options= {

            isStatic:true
            

        }
        this.x= x
        this.y= y
        this.width= width
        this.height= height 
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body)
    }
display(){
    var groundp= this.body.position
    rectMode(CENTER) 
    fill("green") 
    rect(groundp.x, groundp.y, this.width, this.height)
}


}