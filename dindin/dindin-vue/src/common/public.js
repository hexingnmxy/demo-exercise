import config from './config.js' //导入配制文件
import device from './device.js' //导入原生方法


let CorePlugin = {};
let returnCode = config.correctReturnCode;
CorePlugin.install = (Vue, options) => {
	let vue = new Vue();

	// 添加共公方法
	const publicMethods = {
		warning:function(text,callback){
			swal({
				title:text,
				type:'error',
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
	            		mui.toast('网络错误')
	            	}
	               
	            },
	            error: function () {
	              
	            }
			})
		}
	};
	const core = Object.assign(publicMethods,device);
	Vue.prototype.$core = core;
};

export default CorePlugin;
