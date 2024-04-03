import {connect, set} from "mongoose";

const MONGO_DB_URI = "mongodb+srv://nafra:nafra219@gigihlab.cjdbave.mongodb.net/hotel?retryWrites=true&w=majority";
// const MONGO_DB_URI = process.env.MONGO_DB_URI;

(
    async () => {
        try {
            set("strictQuery", false);
            const db = await connect(MONGO_DB_URI);
            console.log("Connect to MongoDb", db.connection?.name);
        }catch (error) {
            console.log(error)
        }
    }
)();