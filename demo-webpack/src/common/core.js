let CorePlugin = {}
import mockDataArray from './mock'
console.log(mockDataArray)
CorePlugin.install = (Vue,options)=>{
	Vue.prototype.$core = {
		getName:function(){
			return 'lili'
		},
		get:function(url,params,flag){
			if(flag){
				let mockData = {};
				for(let temData of mockDataArray){
					console.log(temData)
					if(temData.url === url){
						mockData.body = temData.response.body;
						break;
					}
				}

				return new Promise(resolve => {
					resolve(mockData)
				})
			}else{
				return new Promise((resolve,reject) =>{
					vue.$http.get(url,params).then(resolve,reject)
				})
			}
		}
	}
}

export default CorePlugin;