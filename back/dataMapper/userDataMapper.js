

const client = require('./client');

module.exports = {
async recupUser() {
    const result = await client.query('SELECT id, email, pseudo FROM "user" ORDER BY id ASC') 
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

async checkPassword(id) {
    const result = await client.query(`SELECT password FROM "user" WHERE id = $1`, [id])
    return result.rows;
},

async register(email, password, pseudo, role) {
    const result = await client.query(`INSERT INTO "user" (email, password, pseudo, role) 
                                        VALUES ($1, $2, $3, $4) RETURNING *`, 
                                    [email, password, pseudo, role]);
    return result.rows; 
},

async updateUser(email, password, pseudo, id) {
    const result = await client.query(`UPDATE "user" SET email = $1, password = $2, pseudo = $3 WHERE id = $4`, [email, password, pseudo, id]);
    return result.rows;
},

async deleteUser(id) {
    const result = await client.query(`DELETE FROM "user" WHERE id = $1`, [id]);
    return result.rows;
},

async updateMail (email, id){
    const result = await client.query(`UPDATE "user" SET email = $1 WHERE id = $2`, [email, id]);
    return result.rows;

},

async updatePseudo (pseudo, id){
    const result = await client.query(`UPDATE "user" SET pseudo = $1 WHERE id = $2`, [pseudo, id]);
    return result.rows;
},

async updatePassword (password, id){
    const result = await client.query(`UPDATE "user" SET password = $1 WHERE id = $2`, [password, id]);
    return result.rows;
},

async infoUser (userId){
    const result = await client.query(`SELECT id, email, pseudo FROM "user" WHERE id = $1`, [userId])
    return result.rows;
},

async getHistory (userId){
    const result = await client.query(`SELECT user_id, room, score, position, date FROM user_play_game JOIN game ON user_id = game_id WHERE id = $1 `, [userId])
    return result.rows;
},
}