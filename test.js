{
  var mArissa = document.createElement("img");
mArissa.src ="images/m01.jpg";
}

start = (time / movement)+

time = "[" loop:movement+ "]" _ {
	var dur = 1/movement.length;
	var results = [];
	for (var movement of loop) {
		result.push(movement);
		result.push([dur, 0.25]);
	}
	return [loop, results];
}

movement = duck / kneel / fall / rest

rest = " " { return []; }
duck = "duck" {return mArissa;}
kneel = "kneel" {return mArissa;}
fall = "fall" {return mArissa;}

//phrase = (retrograde / accumulation / ABBA)
//	retrograde = reverse();

_ = [ \t\n\r]*
//space
