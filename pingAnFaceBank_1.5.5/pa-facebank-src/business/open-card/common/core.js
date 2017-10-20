let CorePlugin = {};

CorePlugin.install = (Vue, options) => {
	let vue = new Vue();
	let mockDataArray = window.mockData || [];

	// 添加实例方法
	Vue.prototype.$core = {
		getName() {
			return 'LiLei';
		},
		get(url, params, flag) {
			if (flag) { // 调用模拟接口
				let mockData = {};
				for (let tempData of mockDataArray) {
					if (tempData.url === url) {
						mockData.body = tempData.response.body;
						break;
					}
				}
				return new Promise(resolve => {
					resolve(mockData);
				});
			} else {
				return new Promise((resolve, reject) => {
					vue.$http.get(url, params).then(resolve, reject);
				});
			}
		}
	};
};

export default CorePlugin;
