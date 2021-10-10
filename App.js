const express = require('express')
const app = express()
const path = require('path')
const seq = require('./db.js')
const router = require('./routes/index')
var cors = require('cors')
const bp = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/opneapi')


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bp.urlencoded({
    extended: true
  }))
app.use(bp.json())
app.use(cors())
app.use('/api', router)


app.listen(3000,()=>{
    console.log('started')
})
app.post('/rec',(res,req)=>{
    console.log(req.req.body)

})
app.get('/',(res,req)=>{
    res.res.sendFile(path.resolve(__dirname, 'client','html','index.html'))
})
app.get('/auth',(res,req)=>{
    res.res.sendFile(path.resolve(__dirname, 'client','html','auth.html'))
})
app.get('/register',(res,req)=>{
    res.res.sendFile(path.resolve(__dirname, 'client','html','register.html'))
})