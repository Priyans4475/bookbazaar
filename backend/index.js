const express = require('express')
const app = express()
const port = 3000
const cors =require('cors')
const mainrouter=require('./routes/index')
app.use(cors());



app.use(express.json())
app.use('/api',mainrouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})