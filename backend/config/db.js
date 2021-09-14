const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDb is Connected: ${con.connection.host}`);

    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;