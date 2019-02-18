"use strict";
/**
 * 	Flash example
 *
 * 	This example will make the LED in your controller flash in
 * 	a blue tone for for an indefinite amount of time.
 */

const dualShock = require("dualshock-controller");
const exitHook = require("exit-hook");

const controller = dualShock({
	config: "dualShock4-alternate-driver"
});

controller.setExtras({
	red: 0, // 0-255 (Red intensity)
	green: 75, // 0-255 (Blue intensity)
	blue: 225, // 0-255 (Green intensity)
	flashOn: 100, // 0-255 (Flash on time)
	flashOff: 50 // 0-255 (Flash off time)
});

// Turn off the LED when the process is terminated
exitHook(() => {
	controller.setExtras({
		flashOn: 10,
		flashOff: 1000
	});

	setTimeout(() => {
		process.exit(0); // eslint-disable-line unicorn/no-process-exit
	}, 100);
});
