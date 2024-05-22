const gamesRouter = require("express").Router();
const { sendAllGames, deleteGame, addGame } = require("../controllers/games");
const { getAllGames } = require("../middlewares/games");

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.post("/games", getAllGames, addGame);
gamesRouter.delete("/games/:id", getAllGames, deleteGame);

module.exports = gamesRouter;
