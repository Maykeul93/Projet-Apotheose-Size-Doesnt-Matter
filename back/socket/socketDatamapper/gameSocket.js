const client = require ('../../dataMapper/client');
const { insertNumberPlayer } = require('../socketController/gameController');

module.exports = {
    async recGame (room) {
        const result = await client.query(`INSERT INTO "game" (room) VALUES ($1)`, [room]); 
        return result.rows; 
    }, 

    async getIdGame (room) {
        const result = await client.query(`SELECT * FROM "game" WHERE room = $1`, [room]); 
        return result.rows[0]; 
    }, 

    async boundGameIdonUser (userId, gameId) {
        const result = await client.query(`INSERT INTO "user_play_game" ("user_id", "game_id") VALUES ($1, $2)`, [userId, gameId]);
        return result.rows; 
    }, 

    async roomIsExist (room) {
        const result = await client.query(`SELECT id FROM "game" WHERE room=$1`, [room]); 
        return result.rows[0].id; 
    }, 

    async insertAvatar (avatar, idUser) {
        const result = await client.query(`UPDATE "user" SET avatar=$1 WHERE id=$2`, [avatar, idUser]); 
        return result.rows; 
    },

    async playerPseudo (id) {
        const result = await client.query(`SELECT "id", "pseudo", "avatar" FROM "user" WHERE id=$1`,[id]); 
        return result.rows; 
    },

    async getAllPlayersInOneGame (gameId) {
        // Pour les avatar ajouter u.avatar dans le SELECT
        const result = await client.query(`SELECT u.id, u.pseudo, u.avatar FROM "user" u JOIN "user_play_game" upg ON u.id = upg.user_id JOIN game ON upg.game_id = game.id WHERE game.id = $1`, [gameId]);
        return result.rows; 
    }, 

    async getRandomQuestion () {
        const result = await client.query(`SELECT * FROM "question" ORDER BY random() LIMIT 5`); 
        return result.rows; 
    }, 

    async insertHistory (userID, gameID, score, position, exactAnswer) {
        const result = await client.query(`UPDATE  "user_play_game" SET "score"=$1, "position"=$2, "exact_answer"=$3 WHERE "user_id" = $4  AND "game_id"=$5`, [score, position, exactAnswer, userID, gameID]); 
        return result.rows; 
    }, 

    async insertNumberPlayer (numberPlayer, room) {
        const result = await client.query(`UPDATE "game" SET "number_player"=$1 WHERE "room"=$2`, [numberPlayer, room]); 
        return result.rows; 
    }
}