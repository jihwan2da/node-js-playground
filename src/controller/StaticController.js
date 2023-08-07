/**
 * healthCheck Controller
 * @rount /health_check
 * @method GET
 */

module.exports.healthCheck = (req, res) => {
    const server = require('../app');
    res.status('200').send(`It's Working in Node.js Service on Port ${server.address().port}`)
}
