const client = require ('./client');

module.exports = {
    async checkPseudo(pseudo) {
        const result = await client.query(`SELECT * FROM "user" WHERE pseudo = $1`, [pseudo]);
        return result.rows;
    },
    async changeRole(role, id) {
        const result = await client.query(`UPDATE "user" SET role =$1 WHERE id= $2`,[role, id]);
        return result.rows;
    },
}   