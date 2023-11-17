import { createClient, RedisClient, ClientOpts } from "redis";
import logger from "../../logger/index";
import dotenv from "dotenv";
dotenv.config();

logger.info("Conexão com Redis Estabilizada...");

const clientOptions: ClientOpts = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  socket: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
  },
};

const client: RedisClient = createClient(clientOptions);

function connectionRedis(): void {
  logger.info("Conexão Efetuada!");
  client.connect();
}

export { client };
export default connectionRedis;