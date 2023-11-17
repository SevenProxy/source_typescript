import { Request, Response, NextFunction } from "express";
import { createClient } from "redis";
import { client } from "../infrastructure/redis/connection.ts";
import logger from "../logger/index.ts";
import * as dotenv from "dotenv";
dotenv.config();

interface ResponseFirewall {
  value: boolean;
  data?: unknown;
  message: string;
}

const responseFirewall: ResponseFirewall = {
  value: false,
  message: "[RATE LIMIT] Por favor, você está fazendo muitas requisições para nosso serviço. Aguarde alguns instantes"
}

export default async function RateLimit(namePage: string, req: Request, res: Response, next: NextFunction, secods: number = 20, time: number = 7): Promise<Response | NextFunction> {
    
    const IP: Array[number] = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const KEY: string = `rate-limit-${namePage}-${IP.split(":").pop()}`;

    const requestCount_: number = Number((await client.get(KEY)) || 0) + 1;
    await client.set(KEY, requestCount_, { EX: secods });

    if (requestCount_ >= time) {
        logger.info(JSON.req.body(req.body),`O IP ➜ [ ${IP} ] Tentou entrar no site mas foi barrado pelo rate-limt!`);
        return res.status(403).json(responseFirewall);
    }
    
    //console.log(IP.split(",")[0].strip())
    logger.info(JSON.req.body(req.body),`O IP ➜ [ ${IP} ] Entrou no site, Com as informações:`);
    next();
}
