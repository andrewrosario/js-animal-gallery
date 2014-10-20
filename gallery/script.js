

$(".button").on("click", function() {
	var animal = ($(event.target).attr("id"));
	$("." + animal).slideToggle();
	var toCap = function(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};
	var capitalized = toCap(animal);
	alertify.log("Toggling " + capitalized);
});


$(".button").on('click', function() {
	$(this).toggleClass("active");
});

// find out what was clicked
// change the id to a class
// toggle the class