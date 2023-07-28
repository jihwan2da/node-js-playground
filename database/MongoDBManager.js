import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_DATASOURCE_URL = process.env.MONGO_DATASOURCE_URL

mongoose.connect(MONGO_DATASOURCE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('Mongo DB Connected...'))
.catch((err) => console.log(err))

export default mongoose;