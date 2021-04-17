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
}