import express, { Router, Request, Response, NextFunction } from "express";
import fs from "fs";
const apiClientRouter: Router = express.Router();
import path from "path";
import multer, {Multer} from "multer";
const storage: multer.StorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./src/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload: Multer = multer({storage: storage});

//import { ApplicationQueryUser } from "../../../../application/clientApplication/queryUser.js"

//import RateLimit from "../../../../middleware/Rate.limit.ts";


//const rateLimitGetUser = (req, res, next) => RateLimit("query-user", req, res, next, 60, 80);

apiClientRouter.get("/api-V1/log", async (req: Request, res: Response, next: NextFunction) => {
	interface proptsData {
		user: string,
		password: string,
	};

	interface proptsResponseJson {
	  value: boolean;
	  message: string;
	  data?: Array[proptsData];
	};

	const responseServerHTTP: proptsResponseJson = {
		value: true,
		message: "OI",
		data: {user: "proxy", password: "oi"},
	};
	return res.status(200).json({responseServerHTTP});
});



export default apiClientRouter;