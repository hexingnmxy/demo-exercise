const pageCommon = {
	data:{

	},
	options:{

	},
	init:function(){
		this.methods.debug();
	},
	methods:{
		debug:function(){
			if(process.env.NODE_ENV != 'production'){
				var VConsole = require('VConsole');
				var vconsole = new VConsole();
			}
		}
	}

}

module.exports = pageCommon;