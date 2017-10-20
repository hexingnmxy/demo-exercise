// 开发模式、debug模式允许控制台输出打印信息
export default {
	// 用于输出普通信息
	log(...args) { env !== 'pro' && console.log(...args); },
	// 用于输出提示性信息
	info(...args) { env !== 'pro' && console.info(...args); },
	// 用于输出错误信息
	error(...args) { env !== 'pro' && console.error(...args); },
	// 用于输出警示信息
	warn(...args) { env !== 'pro' && console.warn(...args); },
	// 用于输出调试信息
	debug(...args) { env !== 'pro' && console.debug(...args); }
};
