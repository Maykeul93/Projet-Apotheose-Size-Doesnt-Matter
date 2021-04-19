const adminDataMapper = require('../dataMapper/adminDataMapper');

module.exports = {
    // put change role admin/user
    async updateRole(req, res) {
        const pseudo = req.body.pseudo;
        const checkPseudo = await adminDataMapper.checkPseudo(pseudo);
        if(checkPseudo.length === 0){ return res.status(400).json({ 'error': 'Pseudo innexistant' })}
        try {
            if(checkPseudo[0].role === 'user'){
                let id = checkPseudo[0].id;
                let role = "admin";
                const changeRole = await adminDataMapper.changeRole(role, id);
                return res.status(201).json({"succes":"true"});
            } else {
                let id = checkPseudo[0].id;
                let role = "user";
                const changeRole = await adminDataMapper.changeRole(role, id);
                return res.status(201).json({"succes":"true"});
            }
        } catch {
            res.status(500).send();
        }
    },
    async getAllQuestions(req, res){
        try {
            const result = await adminDataMapper.getAllQuestions();
            res.send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getQuestionById(req, res) {
        const questionId = req.params.id;
        try {
            const result = await adminDataMapper.getQuestionById(questionId);
            res.send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getAllTags(req, res){
        try {
            const result = await adminDataMapper.getAllTags();
            res.send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getTagById(req, res) {
        const tagId = req.params.id;
        try {
            const result = await adminDataMapper.getTagById(tagId);
            res.send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteQuestion(req, res) {
        const questionId = req.params.id;
        try {
            await adminDataMapper.deleteQuestion(questionId);
            res.status(201).json({'succes':'true'})            
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async createQuestion(req, res) {
        const answer = req.body.answer;
        const content = req.body.content;
        //const tag = req.body.tag;
        //const question_id = req.body.question_id;
        //const tag_id = req.body.tag_id;
        try {
            await adminDataMapper.createQuestion(answer, content);
            // const avec id de la question
            res.status(201).json({'succes':'true'});
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async createTag(req, res) {
        const tag = req.body.tag;
        try {
            await adminDataMapper.createTag(tag);
            res.status(201).json({'succes':'true'})
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteTag(req, res) {
        const tagId = req.params.id;
        try {
            await adminDataMapper.deleteTag(tagId);
            res.status(201).json({'succes':'true'})            
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteUser (req, res){
        const id = req.params.id;
        try {
          await adminDataMapper.deleteUser(id);
          res.status(201).json({'succes':'true'})
        } catch (error) {
          res.status(500).send(error);
          }
    },














}