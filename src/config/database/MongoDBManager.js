const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_DATASOURCE_URL = process.env.MONGO_DATASOURCE_URL

module.exports.initMongo = () => {
    mongoose.connect(MONGO_DATASOURCE_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log('Mongo DB Connected...'))
    .catch((err) => console.log(err))

    mongoose.connection.on('connected', function () {
        console.log('Mongoose is now connected to ', process.env.MONGO_DATASOURCE_URL);
    });
}
