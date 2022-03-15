import express from 'express'
import indexRouter from './app-server/routes/index.js'
import apiRouter from './app-api/routes/index.js'
import 'dotenv/config'
import './app-api/models/db.js'
const port = process.env.PORT || 5000

var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)
app.use('/api', apiRouter)

//error handler 
app.use((err, req, res, next) => {
    res.statusCode = err.statusCode;
    res.send({
        error: err
    })
})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))