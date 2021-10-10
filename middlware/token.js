const {User} = require('../models')
const jwt = require('jsonwebtoken')

module.exports = async (res,req,next)=>{
    try {
        console.log(req.req.headers)
        const userData = jwt.verify(req.req.headers.authorization, 'password')
        const user = await User.findOne({where:{email:userData.email, password: userData.password}})
        if(user){
            req.req.userId = user.id
            next()
        }
        else{
            res.res.status(401).send({msg: 'Non Authorizited'})
        }
    } catch (error) {
     console.log(error)   
    }

}