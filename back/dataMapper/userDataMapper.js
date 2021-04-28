const client = require('./client');

module.exports = {
    // Get all user
    async recupUser() {
        const result = await client.query('SELECT id, email, pseudo, avatar, role FROM "user" ORDER BY id ASC') 
        return result.rows;
    },
    // Get user by Id
    async recupUserById(userId) {
        const result = await client.query(`SELECT * FROM "user" WHERE id = $1`, [userId])
        return result.rows;
    },
    // Get user if is exist in the database with his email
    async checkMail(email) {
        const result = await client.query(`SELECT * FROM "user" WHERE email = $1`, [email])
        return result.rows;
    },
    // Get the password of user by his id
    async checkPassword(id) {
        const result = await client.query(`SELECT password FROM "user" WHERE id = $1`, [id])
        return result.rows;
    },
    // Register user
    async register(email, password, pseudo, role) {
        const result = await client.query(`INSERT INTO "user" (email, password, pseudo, role) VALUES ($1, $2, $3, $4) RETURNING *`, [email, password, pseudo, role]);
        return result.rows; 
    },
    // Update user
    async updateUser(email, password, pseudo, avatar, id) {
        const result = await client.query(`UPDATE "user" SET email = $1, password = $2, pseudo = $3, avatar = $4 WHERE id = $4`, [email, password, pseudo, avatar, id]);
        return result.rows;
    },
    // Delete user with his id
    async deleteUser(id) {
        const result = await client.query(`DELETE FROM "user" WHERE id = $1`, [id]);
        return result.rows;
    },
    // Update mail user 
    async updateMail (email, id){
        const result = await client.query(`UPDATE "user" SET email = $1 WHERE id = $2`, [email, id]);
        return result.rows;
    },
    // Update pseudo user
    async updatePseudo (pseudo, id){
        const result = await client.query(`UPDATE "user" SET pseudo = $1 WHERE id = $2`, [pseudo, id]);
        return result.rows;
    },
    // Update password user
    async updatePassword (password, id){
        const result = await client.query(`UPDATE "user" SET password = $1 WHERE id = $2`, [password, id]);
        return result.rows;
    },
    // Give the information of user sending frontEnd
    async infoUser (userId){
        const result = await client.query(`SELECT id, email, pseudo, avatar FROM "user" WHERE id = $1`, [userId])
        return result.rows;
    },
    // Get history user 
    async getHistory (userId){
        const result = await client.query(`SELECT user_id, room, score, position, date FROM user_play_game JOIN game ON user_id = game_id WHERE id = $1 `, [userId])
        return result.rows;
    },

    async gameCount (userId) {
        const result = await client.query(`SELECT COUNT(game_id) FROM "user_play_game" WHERE "user_id"=$1`, [userId]); 
        return result.rows[0].count; 
    }, 

    async lastGameDate (userId) {
        const result = await client.query(`SELECT "date" FROM  "user_play_game" WHERE "user_id"=$1 ORDER BY "date" DESC LIMIT 1`, [userId]); 
        return result.rows[0].date; 
    }, 

    async firstPlace (userId) {
        const result = await client.query(`SELECT COUNT(position) FROM "user_play_game" WHERE "user_id"=$1 AND position=1`, [userId]); 
        return result.rows[0].count; 
    }, 

    async secondPlace (userId) {
        const result = await client.query(`SELECT COUNT(position) FROM "user_play_game" WHERE "user_id"=$1 AND position=2`, [userId]); 
        return result.rows[0].count; 
    }, 

    async thirdPlace (userId) {
        const result = await client.query(`SELECT COUNT(position) FROM "user_play_game" WHERE "user_id"=$1 AND position=3`, [userId]); 
        return result.rows[0].count; 
    },

    async exactAnswerCount (userId) {
        const result = await client.query(`SELECT SUM(exact_answer) FROM "user_play_game" WHERE "user_id"=$1 AND exact_answer>0`, [userId]); 
        return result.rows[0].sum; 
    }, 

    async updateAvatar (avatar, userId){
        const result = await client.query(`UPDATE "user" SET avatar = $1 WHERE id = $2`, [avatar, userId])
        return result.rows;
    },
}