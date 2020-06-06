"use strict"

const express = require("express");
const app = express();
const handler = require("./function/handler")

async function init() {
	await handler({
		app: app
	})
	app.listen(5000, (req, res)=> {
		console.log(`Server is listening from PORT 5000`)
	})
}

init();