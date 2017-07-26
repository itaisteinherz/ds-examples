"use strict";
//
// Touchpad example
//
// This example will turn your controller's touchpad into a
// trackpad for your computer, and will allow you to click
// the left and right buttons using 1 and 2 fingers, respectively.
//

const dualShock = require("dualshock-controller");
const robot = require("robotjs");

const controller = dualShock({
	config: "dualShock4-alternate-driver",
	analogStickSmoothing: true
});

let mousePressed = false;
let rightClick = false;

controller.on("touchpad:x1", data => {
	const screenSize = robot.getScreenSize();

	const touchWidth = 1919;
	const touchHeight = 941;

	const screenX = (data.x + 1) / touchWidth * screenSize.width;
	const screenY = (data.y + 1) / touchHeight * screenSize.height;

	(mousePressed ? robot.dragMouse : robot.moveMouse)(screenX, screenY);
});

controller.on("touchpad:press", () => {
	mousePressed = true;

	robot.mouseToggle("down", rightClick ? "right" : "left");
});

controller.on("touchpad:release", () => {
	mousePressed = false;

	robot.mouseToggle("up", rightClick ? "right" : "left");
});

controller.on("touchpad:x2:active", () => {
	rightClick = true;
});

controller.on("touchpad:x2:inactive", () => {
	rightClick = false;
});
