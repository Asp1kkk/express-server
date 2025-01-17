const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");
const { cors } = require("./middlewares/cors");

app.use(
	cors,
	bodyParser.json(),
	express.static(path.join(__dirname, "public")),
	mainRoute,
	gamesRouter
);

app.listen(3000, () => {
	console.log(`App is listened on PORT: ${3000}`);
});
