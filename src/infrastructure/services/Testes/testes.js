import { UserRepository } from "../../../adaptars/Client/userRepository.js";
import { PostRepository } from "../../../adaptars/Post/postRepository.js"

export const QueryLengthsInfos = async () => {
	const adptaresPost = new PostRepository();
	const adptaresUser = new UserRepository();

	const responsePost = await adptaresPost.findAll();
	const responseUser = await adptaresUser.findAllUsers();

	console.log({allPost: responsePost.length, allUser: responseUser.length});
	return;
	
}