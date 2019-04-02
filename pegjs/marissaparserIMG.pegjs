
{
var index = 1;
var walkImg = new Image();
walkImg.onload = function(){
   appendImage();
}

var tryLoadImage = function( index ){
   walkImg.src = 'tagged/walk/' + index + '.jpg';
   sleep(3000);
}
var appendImage = function(){
   var pic = document.createElement('img');
   pic.src = walkImg.src;
   if (document.body.getElementsByTagName('img').length > 0) {
     document.body.replaceChild(pic, document.body.getElementsByTagName('img')[0])
   }
   else document.body.appendChild( pic )
   if ( index > 10) index = 1;
   //tryLoadImage( index++ )
   setTimeout(tryLoadImage( index++ ), 3000)
}
setTimeout(tryLoadImage( index ), 3000);



{ var mArissa = document.createElement("img");
mArissa.src ='tagged/kneel/5.jpg';}

}

start = time

time = "[" time:movement+ "]" _ {
	var dur = 3;
	var results = [];
	return [results];
  sleep(3000);
}

movement = duck / kneel / walk / rest

rest = " " { return []; }
duck = "duck" {return tempImg;}
kneel = "kneel" {return mArissa;}
walk = "walk" {return walkImg;}

//phrase = (retrograde / accumulation / ABBA)
//	retrograde = reverse();

_ = [ \t\n\r]*
//space
