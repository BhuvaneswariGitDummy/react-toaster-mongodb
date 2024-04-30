const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors =require('cors')
const route = require('./routes/userRoute')

//middleware
const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

const port = process.env.PORT || 8000
const URL = process.env.MONGOURL

mongoose.connect(URL)
.then(()=>{
    console.log('DB connected Successfully')
    app.listen(port,()=>{
        console.log(`Server is listening at port: ${port}`)
    })
})
.catch(error=>console.log(error))

app.use('/api',route)
