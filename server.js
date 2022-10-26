const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/test',(req,res) => {
    const {name,age} = req.query
    res.send(`我是数据,你传递的参数是${name},${age}`)
})

app.listen(3000,(err) => {
    if(!err) console.log('启动成功')
    else console.log('启动失败')
})
