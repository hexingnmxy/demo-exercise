import config from './config.js'

let CorePlugin = {};
let returnCode = config.correctReturnCode;
CorePlugin.install = (Vue, options) => {
	let vue = new Vue();

	// 添加共公方法
	Vue.prototype.$core = {
		warning:function(text,callback){
			swal({
				title:text,
				type:'warning',
				confirmButtonColor:'#dc4b4b',
				confirmButtonText: '确定',
			}).then(function(){
				if(typeof callback == 'function'){
					callback()
				}
			})
		},
		post:function(url,data,jsonpCallback) {
			$.ajax({
				type: "get",
	            url: url,
	            dataType: "jsonp",
	            jsonp: 'callback',
	            data: data,
	            contentType: "application/json;charset=utf-8",
	            success: (response) => {
	            	if(response.code==returnCode){
	            		jsonpCallback && jsonpCallback(response)
	            	}else{
	            		this.warning('网络错误')
	            	}
	               
	            },
	            error: function () {
	              
	            }
			})
		}
	};
};

export default CorePlugin;
