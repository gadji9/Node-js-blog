const jwt = require('jsonwebtoken')
const db = require('../db')
const {User, Blog} = require('../models')

class Controller {
    async Register(res,req){
        if(req.req.body){
            try {
            await User.create({
                email: req.req.body.email,
                password: req.req.body.password
            })
            const token = jwt.sign({
                email: req.req.body.email,
                password: req.req.body.password
            },'password')
            res.res.send(token)
            } catch (error) {
                if(error.name=='SequelizeUniqueConstraintError'){
                    res.res.status(409).send({msg: 'Такой email уже зарегистрирован'})
                }
                else{
                    res.res.send({msg: error.message})
                }
            }
            
        }

    }
    async Auth(res, req){
        if(req.req.body){
            try {
              const user = await User.findOne({where:{email:req.req.body.email, password: req.req.body.password}})
                if(user){
                    const token = jwt.sign({
                        email: user.email,
                        password: user.password
                    },'password')
                    res.res.send(token)
                }
                else{
                    res.res.send({msg: 'Неправильный email или пароль'})
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    async blogCreate(res,req){
        try {
            if(req.req.body.text){
                const user = await User.findByPk(req.req.userId)
                if(user){
                    user.createUserblog({text: req.req.body.text})
                    res.res.status(200).send('smt')
                }
                
              }
        } catch (error) {
            res.res.status(413).send(error)
        }
       
    }
    async blogGet(res,req){
        const blogs = await Blog.findAll({include: User})
        res.res.status(200).send(blogs)
    }
    async blogPatch(res, req){
        const blog = await Blog.findByPk(req.req.body.id)
        blog.text = req.req.body.text
        blog.save()
        res.res.send('msg')
    }
}

module.exports = new Controller()