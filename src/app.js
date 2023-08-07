const express = require('express');
const dotenv = require('dotenv');
const mongoDBManager = require('./config/database/MongoDBManager');
const routeHandler = require('./routes/RouteHandler')
const app = express()

dotenv.config();

const port = process.env.PORT;

mongoDBManager.initMongo();
routeHandler.initRoutes(app)

const server = app.listen(port, () => console.log(`Express Application Listening On Port: ${port}`))

module.exports = server