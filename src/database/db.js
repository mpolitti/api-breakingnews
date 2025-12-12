const mongoose = require('mongoose');

const connectDatabase = () => {

    console.log("Wait connecting to the database");

    mongoose
    .connect("mongodb+srv://<db_username>:<db_password>@breakingnews.9klmym9.mongodb.net/?appName=breakingnews", 
        { serverSelectionTimeoutMS: 5000, socketTimeoutMS: 45000, }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));

}

module.exports = connectDatabase;