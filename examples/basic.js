"use strict";
//
// Basic example
//
// This example turns your left D-pad into your cursor,
// and the l1 and r1 butttons to your left and right mouse
// butttons, respectively.
//

const dualShock = require("dualshock-controller");
const robot = require("robotjs");

const controller = dualShock({
	config: "dualShock4-alternate-driver",
	analogStickSmoothing: true
});

let mousePressed = false;

controller.on("left:move", data => {
	const screenSize = robot.getScreenSize();
	const mousePos = robot.getMousePos();

	const newMouseX = mousePos.x + ((data.x - 125) / 7);
	const newMouseY = mousePos.y + ((data.y - 125) / 7);

	const screenX = Math.max(Math.min(newMouseX, screenSize.width - 1), 0);
	const screenY = Math.max(Math.min(newMouseY, screenSize.height - 1), 0);

	(mousePressed ? robot.dragMouse : robot.moveMouse)(screenX, screenY);
});

controller.on("l1:press", () => {
	mousePressed = true;

	robot.mouseToggle("down", "left");
});

controller.on("l1:release", () => {
	mousePressed = false;

	robot.mouseToggle("up", "left");
});

controller.on("r1:press", () => {
	robot.mouseToggle("down", "right");
});

controller.on("r1:release", () => {
	robot.mouseToggle("up", "right");
});
