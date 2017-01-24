document.addEventListener('DOMContentLoaded', function() {
	let boxes = document.querySelectorAll('.swatch');

	for(let i = 0; i < boxes.length; i++) {
		let styles = window.getComputedStyle(boxes[i]).backgroundColor;
		let channels = styles.match(/\d+/g).map(Number);
		let color = boxes[i].querySelector('.color');
		let variable = boxes[i].querySelector('.variable');

		let brightness = getColorBrightness(channels[0], channels[1], channels[2]);

		let border = shadeBlendConvert(-.15, styles);
		boxes[i].style.borderBottom = '4px solid ' + border;

		if(brightness > 125) {
			color.style.color = 'black';
			variable.style.color = 'black';
		} else {
			color.style.color = 'white';
			variable.style.color = 'white';
		}
	}

	function getColorBrightness(red, green, blue) {
		const RED_MULTIPLIER = 299;
		const GREEN_MULTIPLIER = 587;
		const BLUE_MULTIPLIER = 114;
		const DIVIDER = 1000;

		let brightness = Math.round( ((red * RED_MULTIPLIER) + (green * GREEN_MULTIPLIER) + (blue * BLUE_MULTIPLIER)) / DIVIDER);

		return brightness;
	}

});
