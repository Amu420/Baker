import mongoose from "mongoose";
async function connect(){
    try{
        await mongoose.connect("mongodb://localhost:27017");   //change this to your own mongo url
        console.log('MongoDB connect');
    } catch (error) {
        console.error('Mongodb Connection error, Please make sure db is running');
        console.error(error);
        process.exit(1);
    }
}

export default connect;