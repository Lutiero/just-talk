const jwt = require("jsonwebtoken");
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
    let userToken = req.headers.authorization;
    console.log('top middleware', userToken);
    
    if (userToken && userToken !== 'Bearer undefined') {
        userToken = req.headers.authorization.split(' ')[1];
        console.log('split middleware', userToken);
        const userData = jwt.verify(userToken, 'tads2022MasterClass');

        const user = await User.findOne({
            where: {
                email: userData.email
            }
        });

        console.log('user middleware', user);

        if (user) {
            req.currentUser = user;
            next();
        } else {
            res.status(401).send({ error: "Erro de autenticação" })
        }
        
    } else {
        if (req.originalUrl.includes("/users/signin") || req.originalUrl.includes("/users/create")) {
            console.log('entrou nas excessoes');
            next();
        } else {
            console.log('entrou no ultimo else');
            res.status(401).send({ error: 'Não autorizado' })
        }
    }
}

module.exports = authMiddleware;
