(function () {
	var myFirebaseRef = new Firebase("https://myopres.firebaseio.com/");
	myFirebaseRef.child("pose").on("value", function(snapshot){
		if(snapshot.val() === "WAVE_IN") {
			Reveal.right();
		}
		else if (snapshot.val() === "WAVE_OUT") {
			Reveal.left();
		}
		else if (snapshot.val() === "FIST") {
			Reveal.down();
		}
		else if (snapshot.val() === "FINGERS_SPREAD") {
			Reveal.up();
		}
	})
})()