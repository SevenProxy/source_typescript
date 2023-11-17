import SettingsServerHTTP from "./handller/http.server.ts";
import * as dotenv from "dotenv";
dotenv.config();
import { server, app } from "./websocket/settings.websocket.ts";
import logger from "../logger/index.ts";

const PORT: number = process.env.PORT_API || 8080;

console.clear();
logger.info("Iniciando Servidor...")

new SettingsServerHTTP(app).execute();

interface loggerInfor {
  port: number;
  serverURL: string;
}

server.listen(PORT, () => {
  const loggerJson: loggerInfor = {
    port: PORT,
    serverURL: `https://localhost:${PORT}`
  };

  logger.info(loggerJson, "Servidor Iniciado!");

  //const child = logger.child({ a: 'property' });
  //child.info('hello child!');
});
