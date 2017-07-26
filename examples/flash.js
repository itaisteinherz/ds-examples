"use strict";
//
// Flash example
//
// This example will make the LED in your controller flash in
// a blue tone for for an indefinite amount of time.
//

const dualShock = require("dualshock-controller");

const controller = dualShock({
	config: "dualShock4-alternate-driver",
	analogStickSmoothing: true
});

controller.setExtras({
	red: 0,   // 0-255 (Red intensity)
	green: 75,  // 0-255 (Blue intensity)
	blue: 225, // 0-255 (Green intensity)
	flashOn: 100,  // 0-255 (Flash on time)
	flashOff: 50   // 0-255 (Flash off time)
});
