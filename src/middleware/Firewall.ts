import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";

interface ResponseFirewall {
  value: boolean;
  data?: unknown;
  message: string;
}

const responseFirewall: ResponseFirewall = {
  value: false,
  message: "Firewall indentificou um pequeno erro na sua requisição. Por favor! Envie uma requisição form Date ou application/json. "
}

async function processFrontendRequests(req: Request, res: Response, next: NextFunction): Promise<Response | NextFunction>  {
    const siteFrontUrl: string = process.env.SITE_FRONT;
    if(req.originalUrl.split("/").includes('upload')) return next();
    
    //if (req.headers.origin !== siteFrontUrl) return res.status(403).json(responseFirewall)

    if (req.method !== "POST") return next();
   
    if (
      req.headers["content-type"] !== "application/json" &&
      !req.headers["content-type"].includes("multipart/form-data")
    )
      return res.status(403).json(responseFirewall);
    next();
}

export default processFrontendRequests;