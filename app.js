import express from 'express'
import dotenv from 'dotenv'
import mongoose from './database/MongoDBManager.js';
const app = express()

dotenv.config();

const port = process.env.PORT;

mongoose.connection.on('connected', function () {
    console.log('Mongoose is now connected to ', process.env.MONGO_DATASOURCE_URL);
});

app.get('/health_check', (req, res) => {
    res.send("Application Working")
})

app.listen(port, () => console.log(`Express Application Listening On Port: ${port}`))





