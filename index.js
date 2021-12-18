
var drumsNumber = document.querySelectorAll(".drum").length;

for (i = 0; i < drumsNumber; i++) {

	document.querySelectorAll(".drum")[i].addEventListener("click", function() {

			var drumButton = this.innerHTML;

			makeSound(drumButton);
			makeAnimation(drumButton);

	});
}

function makeSound(key) {

	switch (key) {
			case "w":
				var crash = new Audio("./sounds/crash (6).mp3");
				crash.play();
				break;
								case "a":
					var kick = new Audio("./sounds/crash (2).mp3");
					kick.play();
					break;
				case "s":
					var snare = new Audio("./sounds/crash (3).mp3");
					snare.play();
					break;
				case "d":
					var tom1 = new Audio("./sounds/crash (4).mp3");
					tom1.play();
					break;
				case "j":
					var tom2 = new Audio("./sounds/crash (5).mp3");
					tom2.play();
					break;
				case "k":
					var tom3 = new Audio("./sounds/crash (1).mp3");
					tom3.play();
					break;
				case "l":
					var tom4 = new Audio("./sounds/crash (7).mp3");
					tom4.play();
					break;
				default:
					console.log("You've pressed" + this.innerHTML + " button");
					break;

		}
}

	document.addEventListener("keydown", function(event) {

		makeSound(event.key);
		makeAnimation(event.key);

	});

	function makeAnimation(currentKey) {

		var animated = document.querySelector("." + currentKey);

		animated.classList.add("pressed");

		setTimeout(function() {
			animated.classList.remove("pressed");
		}, 300);

	}
