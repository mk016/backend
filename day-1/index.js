require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello',( req , res)=>{
    res.send('hello how are yuou')
})
app.get('/admin', (req ,res) =>{
    res.send('hello users')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
  