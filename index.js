#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");

const inquirer = require("inquirer");
const execa = require("execa");

const prompt = inquirer.createPromptModule();

const exampleNames = fs.readdirSync(path.join(__dirname, "examples"));

const question = {
	type: "list",
	name: "example",
	message: "Please select an example to run:",
	default: "basic.js",
	choices: exampleNames
};

prompt(question).then(answer => {
	const filename = path.join(__dirname, "examples", answer.example);

	const childProcess = execa("node", [filename]);

	childProcess.catch(() => {
		console.log("Error: a DualShock 4 controller was not found.\nPlease try to reconnect your controller using another cable or restart bluetooth.");
		process.exit(0);
	});

	childProcess.stdout.pipe(process.stdout);
});
