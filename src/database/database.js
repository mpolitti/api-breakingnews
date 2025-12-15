import mongoose from 'mongoose';

const connectDatabase = () => {

    console.log("Wait connecting to the database");

    mongoose
    .connect(process.env.MONGODB_URI,
        { serverSelectionTimeoutMS: 5000, socketTimeoutMS: 45000, }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));

}

export default connectDatabase;