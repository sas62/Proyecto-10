var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var muertes = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var zonaVerde = createSprite(375,190,52,140);
zonaVerde.shapeColor = "lightGreen";

  borde1 = createSprite(190,120,420,3);
  borde2 = createSprite(190,260,420,3);
  
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "blue";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  car1.velocityY = 5;
  car2.velocityY = 8;
  car3.velocityY = - 2;
  car4.velocityY = - 7;
 


function draw() {
   background("white");
  
  
  
  
  
  
  textSize(25)
  fill("orange")
  text("Muertes: " + muertes,200,100);
  strokeWeight(0);
  fill("orange");
  rect(0,120,52,140);
  
 
  



createEdgeSprites();

car1.bounceOff(borde1);
car1.bounceOff(borde2);

car2.bounceOff(borde1);
car2.bounceOff(borde2);

car3.bounceOff(borde1);
car3.bounceOff(borde2);

car4.bounceOff(borde1);
car4.bounceOff(borde2);










if(keyDown("right")){
    sam.x = sam.x + 4.1;
  }
  
  if(keyDown("left")){
    sam.x = sam.x - 4.1;
  }
  
  if(keyDown("up")){
    sam.y = sam.y - 4.1;
  }
  
  if(keyDown("down")){
    sam.y = sam.y + 4.1;
  }




  
 if(sam.isTouching(car1)){
   muertes = muertes + 1;
   sam.x = 25;
   sam.y = 190;
   }
 
 if(sam.isTouching(car2)){
   muertes = muertes + 1;
   sam.x = 25;
   sam.y = 190;
   }
 
 
 if(sam.isTouching(car3)){
   muertes = muertes + 1;
   sam.x = 25;
   sam.y = 190;
   }
 
 
 
 if(sam.isTouching(car4)){
   muertes = muertes + 1;
   sam.x = 25;
   sam.y = 190;
   }
 
 
if(sam.isTouching(zonaVerde)){
 fill("blue")
 textSize(40)
  text("GANASTE",115,200);
car1.velocityY = 0;
car2.velocityY = 0;
car3.velocityY = 0;

car4.velocityY = 0;  
}
 
 
 
 sam.bounceOff(borde1);
 sam.bounceOff(borde2);
 sam.bounceOff(edges);
 
 
 
 
 
 
 
 
 
 
 
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
