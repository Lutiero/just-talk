const jwt = require("jsonwebtoken");
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
    console.log('req.headers.token', req.headers.token);
    const userToken = req.headers.token;

    if(userToken != undefined || userToken != null) {
        const userData = jwt.verify(userToken, 'tads2022MasterClass');
        const user = await User.findOne({
            where: {
                email: userData.email
            }
        });

        if(user) {
            req.currentUser = user;
            next();
        } else {
            res.status(401).send({error: "Erro de autenticação"})
        }
    } 
    else {
        if(req.originalUrl.includes("/users/signin") || req.originalUrl.includes("/users/create")) {
            next();
        } else {
            res.status(401).send({error: "Área restrita"})
        }
        
        
    }
}

module.exports = authMiddleware;
