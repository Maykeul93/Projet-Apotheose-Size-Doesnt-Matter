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
    async getAllQuestions() {
        const result = await client.query(`SELECT * FROM question `)
        return result.rows;
    },
    async getQuestionById(id) {
        const result = await client.query(`SELECT * FROM question WHERE id = $1`,[id])
        return result.rows;
    },
    async getAllTags() {
        const result = await client.query(`SELECT * FROM tag `)
        return result.rows;
    },
    async getTagById(id) {
        const result = await client.query(`SELECT * FROM tag WHERE id = $1`,[id])
        return result.rows;
    },
    async deleteQuestion(id) {
        const result = await client.query(`DELETE FROM question WHERE id = $1`, [id])
        return result.rows;
    },
    async createQuestion(answer, content) {
        const result = await client.query(`INSERT INTO question (answer, content) VALUES ($1, $2) RETURNING *`,[answer, content])
        return result.rows;
    },
    async createTag(tag) {
        const result = await client.query(`INSERT INTO tag (name) VALUES ($1) RETURNING *`, [tag])
        return result.rows;
    },
    async deleteTag(id) {
        const result = await client.query(`DELETE FROM tag WHERE id = $1`, [id])
        return result.rows;
    },
    async deleteUser(id) {
        const result = await client.query(`DELETE FROM "user" WHERE id = $1`, [id])
        return result.rows;
    },






}   