"use strict";
//
// Rumble example
//
// This example will rumble your controller left and right
// when you press the l2 and r2 butttons accordingly, depending
// on the force you apply to the buttons.
//

const dualShock = require("dualshock-controller");

const controller = dualShock({
	config: "dualShock4-alternate-driver"
});

controller.on("l2:analog", intensity => {
	controller.setExtras({
		rumbleRight: intensity   // 0-255 (Rumble left intensity)
	});
});

controller.on("r2:analog", intensity => {
	controller.setExtras({
		rumbleLeft: intensity   // 0-255 (Rumble right intensity)
	});
});

controller.on("touchpad:hold", () => {
	controller.setExtras({
		rumbleLeft: 255,
		rumbleRight: 255
	});
});
