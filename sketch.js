var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35,c36,c37,c38,
c39,c40,c41,c42,c43,c44,c45,c46,c47,c48,c49,c50,c51,c52,c53,c54,c55,c56,c57,c58,c59,c60,c61,c62,c63,c64,c65,c66,c67,c68,c69,c70,c71,c72,c73,c74,
c75,c76;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20;
var sm1
var b1;
var cp1,cp2,cp3,cp4,cp5,cp6,cp7,cp8,cp9;
var man;
var coingrp;

var j1,j2,j3,j4
function preload(){
    sm1ani=loadAnimation("smonster/blue/bmonster1.png","smonster/blue/bmonster2.png","smonster/blue/bmonster3.png","smonster/blue/bmonster4.png",
    "smonster/blue/bmonster5.png","smonster/blue/bmonster6.png")
    sm2ani=loadAnimation("smonster/green/smonster1.png","smonster/green/smonster2.png","smonster/green/smonster3.png","smonster/green/smonster4.png",
    "smonster/green/smonster5.png","smonster/green/smonster6.png")
    sm3ani=loadAnimation("smonster/red/rmonster1.png","smonster/red/rmonster2.png","smonster/red/rmonster3.png","smonster/red/rmonster4.png",
    "smonster/red/rmonster5.png","smonster/red/rmonster6.png")
    manAni=loadAnimation("man/man 1.png","man/man 2.png","man/man 3.png","man/man 4.png","man/man 5.png","man/man 6.png",
    "man/man 7.png","man/man 8.png");

}
function setup(){
    createCanvas(2300,1120);
    // left down
    a1=new Block(350,1050,550,10);
    a2=new Block(350,900,550,10);
    // right down
    a3=new Block(1940,1050,550,10);
    a4=new Block(1940,900,550,10);
    // left up
    a5=new Block(350,70,550,10);
    a6=new Block(350,220,550,10);
    // right up
    a7=new Block(1940,70,550,10);
    a8=new Block(1940,220,550,10);
    // left straight
    a9=new Block(105,570,10,350);
    a10=new Block(255,570,10,350);
    // right straight
    a11=new Block(2035,570,10,350);
    a12=new Block(2185,570,10,350);
    // up straight
    a13=new Block(1075,200,10,300);
    a14=new Block(1225,200,10,300);
    // down straight
    a15=new Block(1075,900,10,300);
    a16=new Block(1225,900,10,300);
    // left sleep
    a17=new Block(650,495,500,10);
    a18=new Block(650,645,500,10);
    // right sleep
    a17=new Block(1650,495,500,10);
    a18=new Block(1650,645,500,10);
    // right down small straight
    a19=new Block(750,825,10,175)
    a20=new Block(900,825,10,175)
    // left down small straight
    a21=new Block(1380,1000,10,175)
    a22=new Block(1530,1000,10,175)
    // right up small straight
    a23=new Block(750,140,10,175)
    a24=new Block(900,140,10,175)
    // left up small straight
    a25=new Block(1380,300,10,175)
    a26=new Block(1530,300,10,175)
    // box block
    j1=new Block(1150,630,200,10)
    j2=new Block(1050,535,10,200)
    j3=new Block(1145,430,200,10)
    j4=new Block(1245,525,10,200)
     // left down
     coingrp=new Group();
    c1=new coin(100,975);
    c2=new coin(175,975);
    c3=new coin(250,975);
    c4=new coin(325,975);
    c5=new coin(400,975);
    c6=new coin(475,975);
    c7=new coin(550,975);
    //c8 = new coin(575,975)
    // right down
    c8=new coin(1700,975);
    c9=new coin(1775,975);
    c10=new coin(1850,975);
    c11=new coin(1925,975);
    c12=new coin(2000,975);
    c13=new coin(2075,975);
    c14=new coin(2150,975);
    // left up
    c15=new coin(100,140);
    c16=new coin(175,140);
    c17=new coin(250,140);
    c18=new coin(325,140);
    c19=new coin(400,140);
    c20=new coin(475,140);
    c21=new coin(550,140);
    // right up
    c22=new coin(1700,140);
    c23=new coin(1775,140);
    c24=new coin(1850,140);
    c25=new coin(1925,140);
    c26=new coin(2000,140);
    c27=new coin(2075,140);
    c28=new coin(2150,140);
    // left sleep
    c29=new coin(430,565);
    c30=new coin(505,565);
    c31=new coin(580,565);
    c32=new coin(655,565);
    c33=new coin(730,565);
    c34=new coin(805,565);
    c35=new coin(880,565);
    // right sleep
    c36=new coin(1425,565);
    c37=new coin(1500,565);
    c38=new coin(1575,565);
    c39=new coin(1650,565);
    c40=new coin(1725,565);
    c41=new coin(1800,565);
    c42=new coin(1875,565);
    // left straight
    c43=new coin(180,415);
    c44=new coin(180,480);
    c45=new coin(180,545);
    c46=new coin(180,610);
    c47=new coin(180,675);
    c48=new coin(180,740);
    // right straight
    c49=new coin(2105,415);
    c50=new coin(2105,480);
    c51=new coin(2105,545);
    c52=new coin(2105,610);
    c53=new coin(2105,675);
    c54=new coin(2105,740);
    // left up small straight
    c55=new coin(820,70);
    c56=new coin(820,130);
    c57=new coin(820,190);
    // left down small straight
    c58=new coin(820,755);
    c59=new coin(820,815);
    c60=new coin(820,875);
    // up straight
    c61=new coin(1145,70);
    c62=new coin(1145,130);
    c63=new coin(1145,190);
    c64=new coin(1145,250);
    c65=new coin(1145,310);
    // down straight
    c66=new coin(1145,770);
    c67=new coin(1145,830);
    c68=new coin(1145,890);
    c69=new coin(1145,950);
    c70=new coin(1145,1010);
    // right down small straight
    c71=new coin(1450,230);
    c72=new coin(1450,290);
    c73=new coin(1450,350);
    // right down small straight
    c74=new coin(1450,930);
    c75=new coin(1450,990);
    c76=new coin(1450,1050);
    // part 1 mon
    m1=new Block(970,200,5,250);
    cp1=createSprite(1000,300,10,10);
    m2=new Block(500,300,900,5);
    m3=new Block(40,170,5,250);
    m4=new Block(350,30,600,5);
    m5=new Block(650,140,5,200);
    b1=createSprite(950,25,100,5)
    // part 2 mon
    m6=new Block(1300,250,5,400);
    m7=new Block(1450,150,300,5);
    m8=new Block(1600,280,5,250);
    m9=new Block(1940,300,650,5);
    cp2=createSprite(1950,440,10,10)
    cp3=createSprite(1950,300,10,10)
    cp4=createSprite(2230,300,10,10)
    cp5=createSprite(2230,30,10,10)
    m10=new Block(2240,150,5,250);
    m11=new Block(1750,35,900,5);
    // part 3 mon
    m12=new Block(1750,1100,1000,5);
    cp6=createSprite(1300,800,10,10);
    cp7=createSprite(1300,1100,10,10);
    cp8=createSprite(2250,1100,10,10);
    cp9=createSprite(2250,800,10,10);
    m13=new Block(1300,900,5,300);
    m14=new Block(1800,800,800,5);
    m15=new Block(1600,950,5,200)
    // part 4 mon
    m16=new Block(500,1100,900,5);
    m17=new Block(950,900,5,400);
    m18=new Block(800,700,200,5);
    m19=new Block(700,900,5,300);
    m20=new Block(350,850,600,5);
    //part 1 monster
    sm1=createSprite(random(40,980),280,10,10)
    sm1.addAnimation("blueMonster",sm1ani);
    sm1.scale=0.7;
    sm1.velocityX=5;
    sm1.velocityY=0
    //part 2 monster
    sm2=createSprite(random(1300,2250),50,10,10)
    sm2.addAnimation("greenMonster",sm2ani);
    sm2.scale=0.7;
    sm2.velocityX=-5;
    sm2.velocityY=0;
    sm2.debug=true;
    sm2.setCollider("circle",0,0,10)
    // part 3 monster
    sm3=createSprite(random(1300,2200),800,10,10)
    sm3.addAnimation("redMonster",sm3ani);
    sm3.scale=0.7;
    sm3.velocityX=-5;
    sm3.velocityY=0;
    sm3.debug=true;
    sm3.setCollider("circle",0,0,10)

    man=createSprite(40,970,10,10);
    man.addAnimation("walking",manAni);
    man.scale=0.9

   



    //smonster1();




}
function draw(){
    background(0);
    textSize(20);
    text(mouseX+","+mouseY,mouseX,mouseY)

    //console.log(sm2.x)

    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();
    c6.display();
    c7.display();
    c8.display();
    c9.display();
    c10.display();
    c11.display();
    c12.display();
    c13.display();
    c14.display();
    c15.display();
    c16.display();
    c17.display();
    c18.display();
    c19.display();
    c20.display();
    c21.display();
    c22.display();
    c23.display();
    c24.display();
    c25.display();
    c26.display();
    c27.display();
    c28.display();
    c29.display();
    c30.display();
    c31.display();
    c32.display();
    c33.display();
    c34.display();
    c35.display();
    c36.display();
    c37.display();
    c38.display();
    c39.display();
    c40.display();
    c41.display();
    c42.display();
    c43.display();
    c44.display();
    c45.display();
    c46.display();
    c47.display();
    c48.display();
    c49.display();
    c50.display();
    c51.display();
    c52.display();
    c53.display();
    c54.display();
    c55.display();
    c56.display();
    c57.display();
    c58.display();
    c59.display();
    c60.display();
    c61.display();
    c62.display();
    c63.display();
    c64.display();
    c65.display();
    c66.display();
    c67.display();
    c68.display();
    c69.display();
    c70.display();
    c71.display();
    c72.display();
    c73.display();
    c74.display();
    c75.display();
    c76.display();
    smonster1();
    smonster2();
    smonster3();
    
    manMove();

   // coin.destroyCoins();
  
    for(var i=0;i<coingrp.length;i++){
      
        if(coingrp.get(i).isTouching(man)){
            console.log("coingrp")
            console.log(coingrp.get(i))
            coingrp.get(i).destroy();
        }
    } 
        
    

   
    
       
        //console.log(sm1.x);
        //console.log(sm1.y);
       // console.log(sm1.velocityX)

   
    
    

    drawSprites();
}
function smonster1 (){
    if(sm1.x>970){
        sm1.velocityY=-5;
        sm1.velocityX=0;
       }
   // if(sm1.x>980){
      //  sm1.velocityY=-5;
       // sm1.velocityX=0;
  //  }
    if(sm1.y<=30){
        sm1.velocityX=-5;
        sm1.velocityY=0;
    }
    if(sm1.x<=50){
        sm1.velocityY=5;
        sm1.velocityX=0;
    }
    if(sm1.y>=300){
            sm1.velocityY=0;
            sm1.velocityX=5;
        }
    if(sm1.isTouching(cp1)){
        sm1.velocityY=-5;
        sm1.velocityX=0;

        }
    
    
}
function smonster2(){
    if(sm2.x<=1290){
        sm2.velocityY=5;
        sm2.velocityX=0;

    }
    if(sm2.y>=430){
       sm2.velocityY=0;
       sm2.velocityX=5;

   }
   if(sm2.x===2230){
    sm2.velocityY=-5;
    sm2.velocityX=0;

}
if(sm2.isTouching(cp2)){
    sm2.velocityY=-5;
    sm2.velocityX=0;

    }
if(sm2.isTouching(cp3)){
        sm2.velocityY=0;
        sm2.velocityX=5;
    
        }
        if(sm2.isTouching(cp4)){
            sm2.velocityY=-5;
            sm2.velocityX=0;
        
            }
            if(sm2.isTouching(cp5)){
                sm2.velocityY=0;
                sm2.velocityX=-5;
            
                }

}
function smonster3(){
    if(sm3.isTouching(cp6)){
        sm3.velocityY=5;
        sm3.velocityX=0;

    }
    if(sm3.isTouching(cp7)){
        sm3.velocityY=0;
        sm3.velocityX=5;

    }
    if(sm3.isTouching(cp8)){
        sm3.velocityY=-5;
        sm3.velocityX=0;

    }
    if(sm3.isTouching(cp9)){
        sm3.velocityY=0;
        sm3.velocityX=-5;

    }
}
function manMove(){
    if(keyDown(UP_ARROW)){
        man.y=man.y-10;
    }
    if(keyDown(RIGHT_ARROW)){
        man.x=man.x+10;
    }
}