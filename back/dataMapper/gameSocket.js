const client = require ('./client');

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
    }
}