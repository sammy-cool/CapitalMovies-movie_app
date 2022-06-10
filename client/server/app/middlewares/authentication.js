const jwt = require('jsonwebtoken')


const authenticatedUser = (req, res, next) => {
    //console.log(req.headers)
    const token = req.headers.authorization
    if(token){
        let tokenData
        try {
            tokenData = jwt.verify(token, 'capitalMovie')
            req.userId = tokenData.id
            next()
        }catch(e) {
            res.status('401').json({ error: e.message })
        }
    }else {
        res.status('401').json({ error: 'token not provided'})
    }
}

module.exports = {
    authenticatedUser
}
