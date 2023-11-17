import { Request, Response, NextFunction } from "express";
import { readdirSync } from "fs";
import { join } from "path";
import express from "express";
import SettingsServerHTTP from "./settings.server.js";
import bodyParser from "body-parser";
import cors from "../../middleware/Headers.Auth.ts";
import processFrontendRequests from "../../middleware/Firewall.ts";
//import Db from "../database/connection.js";
//import MongoDbConnection from "../database/database.js";
import connectionRedis from "../redis/connection.ts";

// routes
import apiClientRouter from "../services/oko/Client/ClientRouter.ts";
//import apiClientQuerys from "../services/oko/Forum/ForumRoutes.js";

// testes
//import { QueryLengthsInfos } from "../services/Testes/testes.js";

export default class extends SettingsServerHTTP {
  constructor(app) {
    super(app);
  }

  async execute() {
    
    //connectionRedis();

    this.app.use(cors);
    this.app.use(express.json({ strict: false }));
    this.app.use((req, res, next) => processFrontendRequests(req, res, next));
    this.app.use(express.json());
    this.app.use(bodyParser.json());
  
    // routes
    this.app.use(apiClientRouter);
    //this.app.use(apiClientQuerys);

    //new Db(MongoDbConnection).Start();
    
  }
}
