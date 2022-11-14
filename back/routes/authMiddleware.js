const jwt = require("jsonwebtoken");
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
    const userToken = req.headers.token;

    if(userToken) {
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
            res.status(401).send({error: "Erro de authenticação"})
        }
    } 
    else {
        if(req.originalUrl.includes("/users/signin") || req.originalUrl.includes("/users/create")) {
            next();
        } else {
            res.status(401).send({error: "Área restritaa"})
        }
        
    }
}

module.exports = authMiddleware;
