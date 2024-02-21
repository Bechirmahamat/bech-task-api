require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/errorHandler')
const router = require('./routes/Task')
const app = express()
app.use([
    express.json(),
    express.urlencoded({ extended: false }),
    express.static('./public'),
])
app.use('/api/v1/tasks', router)
// middlewares
app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log('Connected To DB')
        app.listen(3000, () =>
            console.log('server is Listening to port 3000....')
        )
    } catch (error) {
        console.log(error)
    }
}

start()
