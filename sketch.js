const Engine= Matter.Engine;
 const World =Matter.World;
  const Bodies = Matter.Bodies;
   var engine,world,object;
    var ground;
     function setup(){
 createCanvas(400,400)
   engine=Engine.create();
 world= engine.world;
 var option ={
      restitution:1.5 }
       object=Bodies.circle(100,100,20,option);
        World.add(world,object); 
        var Ground1 ={ isStatic:true }
         ground= Bodies.rectangle(200,400,390,20,Ground1)
          World.add(world,ground) }
           function draw(){
                background(0)
                 rectMode(CENTER)
                  Engine.update(engine)
                   ellipse(object.position.x,object.position.y,20) 
                   rect(ground.position.x,ground.position.y,390,20) }
