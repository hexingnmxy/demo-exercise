const koa = require('koa');
const app = new koa();
const loggerAsync = require('./middleware/logger')
const crypto = require('crypto');

// const hostname = '192.168.42.110';
const port = 3000;

app.use(loggerAsync());
app.use(async(ctx) => {
	ctx.body = "hello koa3"
})

app.listen(port,() => {
	console.log(`Server running at http://${port}`);
})