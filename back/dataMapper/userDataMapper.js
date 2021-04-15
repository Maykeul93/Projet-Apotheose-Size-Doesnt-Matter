const client = require('./client');

module.exports = {
async recupUser() {
    const result = await client.query('SELECT * FROM "user"') 
    return result.rows;
},

async recupUserById(userId) {
    const result = await client.query(`SELECT * FROM "user" WHERE id = $1`, [userId])
    return result.rows;
},

async checkMail(email) {
    const result = await client.query(`SELECT * FROM "user" WHERE email = $1`, [email])
    return result.rows;
},
async register(email, password, pseudo, role) {
    const result = await client.query(`INSERT INTO "user" (email, password, pseudo, role) 
                                        VALUES ($1, $2, $3, $4) RETURNING *`, 
                                    [email, password, pseudo, role]);
    return result.rows; 
},

}