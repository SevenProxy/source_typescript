import mongoose from "mongoose";
import logger from "../../logger/index.ts";


export default class MongoDbConnection {
    Connection() {
        const URL: string = process.env.DB_CONNETCTION;
        mongoose.connect(URL)
            .then(() => {
                looger.info("Conexão com MongoDB foi efetuada.";
            })
            .catch((error) => {
                looger.info(error);
            });
    }
}