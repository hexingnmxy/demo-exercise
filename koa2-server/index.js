const koa = require('koa');
const app = new koa();
const crypto = require('crypto');

const hostname = '127.0.0.1';
const port = 3006;

app.use(async(ctx) => {
	if (ctx.method === 'GET') {
		const token = 'imoocnmxyhexing', // 自定义，与公众号设置的一致 
			signature = ctx.query.signature,
			timestamp = ctx.query.timestamp,
			nonce = ctx.query.nonce

		// 字典排序
		const arr = [token, timestamp, nonce].sort()

		const sha1 = crypto.createHash('sha1')
		sha1.update(arr.join(''))
		const result = sha1.digest('hex')

		if (result === signature) {
			ctx.body = ctx.query.echostr;
			console.log('11111');
		} else {
			console.log('22222');
			ctx.body = {
				code: -1,
				msg: "fail"
			}
		}
	}
})

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
})