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

let childProcess;
prompt(question).then(answer => {
	const filename = path.join(__dirname, "examples", answer.example);

	childProcess = execa("node", [filename]);

	childProcess.catch(error => {
		if (!error.signal) {
			console.log("Error: a DualShock 4 controller was not found.\nPlease try to reconnect your controller using another cable or restart bluetooth.");
		}

		process.exit(0);
	});

	childProcess.stdout.pipe(process.stdout);
});

// Forward exit code to child process
const exitChildProcess = exitCode => {
	if (childProcess) {
		childProcess.kill(exitCode);
	}
};

process.on("SIGINT", exitChildProcess);
process.on("SIGTERM", exitChildProcess);
