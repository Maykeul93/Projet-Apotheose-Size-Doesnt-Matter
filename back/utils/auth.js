const userDataMapper = require('../dataMapper/userDataMapper');

module.exports = {
    // Authantificate user in bdd user(role)
    async authUser(req, res, next){
        const id = req.params.id;
        const user = await userDataMapper.recupUserById(id);
        if (user[0].role === 'admin' || 'user') {
            next()
        } else {
            res.status(403);
            return res.send('vous devez vous connecter pour pouvoir accéder à cette page');
        }

    },
    // Authantificate admin in bdd user(role)
    async authAdmin(req, res, next){
        const id = req.params.id;
        const user = await userDataMapper.recupUserById(id);
        if (user[0].role === 'admin' ) {
            next()
        } else {
            res.status(403);
            return res.send('vous devez etre Admin pour pouvoir accéder à cette page');
        }

    },
}