let CorePlugin = {};

CorePlugin.install = (Vue, options) => {
	let vue = new Vue();
	let mockDataArray = window.mockData || [];

	// 添加实例方法
	Vue.prototype.$core = {
		post(url, params, context) {
			if (env === 'dev') { // 调用模拟接口
				let mockData = {};
				for (let tempData of mockDataArray) {
					if (tempData.url === url) {
						mockData = tempData.response.data;
						break;
					}
				}
				return new Promise(resolve => {
					setTimeout(() => {
						resolve(mockData);
					}, 1000);
				});
			} else {
				return new Promise((resolve, reject) => {
					vue.$http.post(url, params, {emulateJson: true}).then((res) => {
						let data = res.data;
						if (data.ReturnCode === '000000') {
							resolve(data);
						} else if (data.ReturnCode === 'L000006') {
                            context.$store.state.loadingPopDisabled = true;
                            context.$store.state.popBoxDisabled = false; // 普通弹框--显示
                            context.$store.state.popBoxText = '登录超时，无法继续办理，请登录重新办理业务'; // 普通弹框--文字
						} else {
                            context.$store.state.loadingPopDisabled = true;
                            context.$store.state.popBoxDisabled = false; // 普通弹框--显示
                            context.$store.state.popBoxText = data.ReturnCode + "-" + data.ReturnMessage; // 普通弹框--文字
						}
					},(error)=>{ // 404之类的错误
						reject(error)
					});
				});
			}
		}
	};
};

export default CorePlugin;
