const staticRouter = require('./static') 

module.exports.initRoutes = (app) => {
    app.use("/api/v1", staticRouter)
}