//import { UserRepository } from "../../../adaptars/Client/userRepository.js";
//import { hash200 } from "../../../middleware/Crypto.Hashs.js";
import { Server, Socket } from "socket.io";
const date = new Date();

export default function ConnectionSocketClient(io: Server) {
	io.on("connection", (socket: Socket) => {
		console.log("websocket is connected!");
	})
}
