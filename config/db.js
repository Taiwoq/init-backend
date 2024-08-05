const mongoose = require("mongoose")
const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://taiwoq210:Falcon210@cluster0.hg1rvss.mongodb.net/")
        console.log("mongoDb connected successfully"  + connect.connection.host);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb