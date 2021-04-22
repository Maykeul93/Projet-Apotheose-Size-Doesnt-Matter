const client = require ('../../dataMapper/client');

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

    async playerPseudo (id) {
        const result = await client.query(`SELECT "id", "pseudo" FROM "user" WHERE "id"=$1`, [id]); 
        return result.rows[0]; 
    },

    async getAllPlayersInOneGame (gameId) {
        // Pour les avatar ajouter u.avatar dans le SELECT
        const result = await client.query(`SELECT u.id, u.pseudo FROM "user" u JOIN "user_play_game" upg ON u.id = upg.user_id JOIN game ON upg.game_id = game.id WHERE game.id = $1`, [gameId]);
        return result.rows; 
    }, 

    async getRandomQuestion () {
        const result = await client.query(`SELECT * FROM "question" ORDER BY random() LIMIT 5`); 
        return result.rows; 
    }, 

    async insertHistory (userID, gameID, score, position, date, exactAnswer) {
        const result = await client.query(`UPDATE  "user_play_game" SET "score"=$1, "position"=$2, "exact_answer"=$3 WHERE "user_id" = $4  AND "game_id"=$5`, [score, position, exactAnswer, userID, gameID]); 
        return result.rows; 
    }
}