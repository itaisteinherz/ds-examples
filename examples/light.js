"use strict";
/**
 * 	Light example
 *
 * 	This example will make your controller's LED light up
 * 	in the colors of the rainbow.
 */

const dualShock = require("dualshock-controller");
const Color = require("color");

const controller = dualShock({
	config: "dualShock4-alternate-driver"
});

let h = 0;

setInterval(() => {
	h %= 360;

	const currentColor = {
		h,
		s: 100,
		l: 50
	};

	const rgbColor = Color.hsl(currentColor);

	controller.setExtras({
		red: rgbColor.red(),
		green: rgbColor.green(),
		blue: rgbColor.blue()
	});

	h += 1;
}, 10);
