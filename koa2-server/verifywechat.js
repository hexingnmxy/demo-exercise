// 验证消息来自微信服务器
const crypto = require('crypto')
module.exports = (ctx) => {
    const token = 'xxxx', // 自定义，与公众号设置的一致
          signature = ctx.query.signature,
          timestamp = ctx.query.timestamp,
          nonce = ctx.query.nonce

    // 字典排序
    const arr = [token, timestamp, nonce].sort()

    const sha1 = crypto.createHash('sha1')
    sha1.update(arr.join(''))
    const result = sha1.digest('hex')

    if (result === signature) {
        ctx.body = ctx.query.echostr
    } else {
        ctx.body = { code: -1, msg: "fail"}
    }
}
