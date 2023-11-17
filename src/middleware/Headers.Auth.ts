import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const frontSiteLink: string = process.env.SITE_FRONT;

interface ResponseCors {
    value: boolean;
    data?: unknown;
    message: string
}

const responseCors: ResponseCors = {
    value: false,
    message: "Acesso Negado!"
}

export default cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (origin !== frontSiteLink) {
            return callback(JSON.stringify(responseCors), false);
        }
        callback(null, true)
    },
    optionsSuccessStatus: 200,
});
