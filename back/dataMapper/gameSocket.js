const client = require ('./client');

module.exports = {
    async recGame (room) {
        const result = await client.query(`INSERT INTO "game" (room) VALUES ($1)`, [room]); 
        return result.rows; 
    }, 

    async getIdGame (room) {
        const result = await client.query('SELECT * FROM "game" WHERE room = $1', [room]); 
        console.log('result', result.rows[0]);
        return result.rows[0]; 
    }
}