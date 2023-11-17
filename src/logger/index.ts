import pino from 'pino';

let n: number = 0;

const logger = pino({
	msgPrefix: '[HTTP] => ',
	crlf: true,
	/*nestedKey: 'payload',
	mixin () {
	    return { line: `Logger Number: ${++n}` }
	},*/
	transport: {
	    target: 'pino-pretty',
	    options: {
	      colorize: true
	    }
	}
});

export default logger;
