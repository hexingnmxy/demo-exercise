const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new mongoose.Schema({
	name:String,
	token:String,
	expires_in:Number,
	meta:{
		createdAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})

TokenSchema.pre('save',function(next){
	if(this.isNew){
		this.meta.createdAt = this.meta.updateAt = Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}
})

TokenSchema.statics = {
	async getAccessToken (){
		const token = await this.findOne({
			name:'access_token'
		}).exec()
		return token
	},

	async saveAccessToken(data){
		let token = await this.findOne({
			name:'access_token'
		}).exec()

		if(token){
			token.token = data.access_token
			token.expires_in = data.expires_in
		}else{
			token = new Token({
				name:'access_token',
				token:data.access_token,
				expires_in:data.expires_in
			})
		}
		await token.save()

		return data
	}
}

const Token = mongoose.models('Token',TokenSchema)