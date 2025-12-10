const mongoose = require('mongoose');

const connectDatabase = () => {

    console.log("Wait connecting to the database");

    mongoose
    .connect("", 
        { serverSelectionTimeoutMS: 5000, socketTimeoutMS: 45000, }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));

}

module.exports = connectDatabase;