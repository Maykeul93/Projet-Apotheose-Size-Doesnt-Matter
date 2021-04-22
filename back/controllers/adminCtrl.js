const { updateCorrespondence } = require('../dataMapper/adminDataMapper');
const adminDataMapper = require('../dataMapper/adminDataMapper');

module.exports = {
    // put change role admin/user
    async updateRole(req, res) {
        const {userId} = req.body;        
        const checkPseudo = await adminDataMapper.checkPseudo(userId);
        if(checkPseudo.length === 0){ return res.status(400).json({ 'error': 'Pseudo innexistant ou ID' })}
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
        const {questionId} = req.params;
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
        const { tagId } = req.params;
        try {
            const result = await adminDataMapper.getTagById(tagId);
            res.send(result)
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteQuestion(req, res) {
        const { questionId } = req.params;
        try {
            await adminDataMapper.deleteCorrespondence(questionId);
            await adminDataMapper.deleteQuestion(questionId);
            res.status(201).json({'succes':'true'})            
        } catch (error) {
            res.status(500).send(error);
        }
    }, 
    async createQuestion(req, res) { 
        const { content, answer, tagId } = req.body;  
        
        try {
            if(content == null || content.length == 0 || answer == null || answer.length == 0 || tagId == null || tagId.length == 0){return res.status(400).json({ 'error': 'paramètre manquant' })};
            const questionInfo = await adminDataMapper.createQuestion(answer, content);
            await adminDataMapper.insertCorrespondance(tagId, questionInfo[0].id);
            res.status(201).json({'succes':'true'});
        } catch (error) {
            res.status(500).send(error); 
        }
    },
    async createTag(req, res) {
        const { tag } = req.body;
        try {
            await adminDataMapper.createTag(tag);
            res.status(201).json({'succes':'true'})
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteTag(req, res) {
        const { tagId } = req.params;
        try {
            await adminDataMapper.deleteTag(tagId);
            res.status(201).json({'succes':'true'})            
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async deleteUser (req, res) {
        const { userId } = req.params;
        try {
          await adminDataMapper.deleteUser(userId);
          res.status(201).json({'succes':'true'})
        } catch (error) {
          res.status(500).send(error);
          }
    },
    async updateQuestion (req, res) {
        const { questionId } = req.params;
        const { content, answer, tagId } = req.body; 
        
        try {
            await adminDataMapper.updateQuestion(content, answer, questionId); 
            await adminDataMapper.updateCorrespondence(tagId, questionId);
            res.status(201).json({'succes':'true'}); 
            
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async updateTag (req, res) {
        const { tagId } = req.params; 
        const { name } = req.body; 

        try {
            await adminDataMapper.updateTag(name, tagId)
            res.status(201).json({'succes': 'true'}); 
        } catch (error) {
            res.status(500).send(error); 
        }
    },
}