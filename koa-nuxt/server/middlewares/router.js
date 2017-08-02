import Router from 'koa-router'
import sha1 from 'sha1'

export const router = function(app) {
	const router = new Router()

	router.get('/a',(ctx,next) => {
		const token = 'imoocnmxyhexing',
			  signature = ctx.query.signature,
		      timestamp = ctx.query.timestamp,
		      nonce = ctx.query.nonce

		const str = [token,timestamp,nonce].sort().join('')
		const sha = sha1(str)
		if(sha === signature){
			ctx.body = ctx.query.echostr;
			console.log(1111)
		}else {
			console.log(22222)
			ctx.body = "failed";
		}
		
	})
	app.use(router.routes());
	app.use(router.allowedMethods())
}