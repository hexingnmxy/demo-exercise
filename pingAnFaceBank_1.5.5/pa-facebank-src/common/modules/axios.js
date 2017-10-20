// 添加实例方法
let axios = {
	// 第一次post请求，获取"跟踪流水号"
	firstPost(options) {
		let url = options.url || ''; // 请求连接
		let success = options.success; // 成功回调
		if (Env === 'dev') { // 调用模拟接口
			setTimeout(() => {
				Ui.loading(false);
				success(MockData);
			}, 1000);
		} else {
			let params = options.params || {}; // 请求参数
			let error = options.error; // 错误回调
			Axios.create({
				headers: options.headers, // 请求头信息
				timeout: options.timeout || 10 * 1000, // 设置超时时间
				responseType: options.dataType || 'json' // 返回数据类型
			}).post(url, params).then(res => {
				Ui.loading(false);
				let data = res.data;
				if (data.ReturnCode === '000000') {
					success(data);
				} else if (data.ReturnCode === 'L000006') {
					Ui.popBox(true, {text: '登录超时，无法继续办理，请登录重新办理业务'});
				} else {
					Ui.popBox(true, {text: data.ReturnCode + '-' + data.ReturnMessage});
				}
			}, e => { // 404之类的错误
				Ui.loading(false);
				error(e);
			});
		}
	},
	// 请求接口
	post(options) {
		let url = options.url || ''; // 请求连接
		let success = options.success; // 成功回调
		if (Env === 'dev') { // 调用模拟接口
			let mockData = {};
			for (let tempData of MockData.bussiness) {
				if (tempData.url === url) {
					mockData = tempData.response.data;
					break;
				}
			}
			setTimeout(() => {
				Ui.loading(false);
				success(mockData);
			}, 1000);
		} else {
			let params = options.params || {}; // 请求参数
			let error = options.error; // 错误回调
			let headersTemp = {
				PrdId: Store.state.PrdId, // 业务ID
				BusinessJnlNo: Store.state.BusinessJnlNo || '', // 业务流水号(第一次post请求时传空)
				TraceId: Store.state.TraceId // 跟踪流水号
			};
			let headers = Object.assign(headersTemp, options.headers); // 可能还有其他头部信息需要传给后端
			Axios.create({
				headers: headers,
				onUploadProgress: options.onUploadProgress // 上传处理进度事件
			}).post(url, params).then(res => {
				Ui.loading(false);
				let data = res.data;
				let BusinessJnlNo = res.headers.BusinessJnlNo;
				// 每次请求都判断，后端返回的头部有没有业务流水号，若有则获取并保存到全局  2017年10月份的版本都是在头部取业务流水号
				if (BusinessJnlNo) {
					Store.state.BusinessJnlNo = BusinessJnlNo;
				}
				if (data.ReturnCode === '000000') {
					resolve(data);
				} else if (data.ReturnCode === 'L000006') {
					Ui.popBox(true, {text: '登录超时，无法继续办理，请登录重新办理业务'});
				} else {
					Ui.popBox(true, {text: data.ReturnCode + '-' + data.ReturnMessage});
				}
			}, e => { // 404之类的错误
				Ui.loading(false);
				error(e);
			});
		}
	},
	// 验密的请求
	checkPwdPost(options) {
		let url = options.url || ''; // 请求连接
		let success = options.success; // 成功回调
		let params = options.params || {}; // 请求参数
		let error = options.error; // 错误回调
		if (Env === 'dev') { // 调用模拟接口
			setTimeout(() => {
				Ui.loading(false);
				success();
			}, 1000);
		} else {
			let headers = {
				PrdId: store.state.PrdId, // 业务ID
				BusinessJnlNo: store.state.BusinessJnlNo || '', // 业务流水号 第一次请求的话为空
				TraceId: store.state.TraceId // 跟踪流水号
			};
			// 请求接口 获取时间戳
			Axios.create({headers: headers}).post(Server.getServerTime, {}).then(result => {
				params.PassWord = Device.requestCEPWD(result.data.TimeStamp);
				Axios.create({headers: headers}).post(url, params).then(res => {
					Ui.loading(false);
					store.state.BusinessJnlNo = res.data.BusinessJnlNo;
					let data = res.data;
					if (data.ReturnCode === '000000') {
						success(data);
					} else if (data.ReturnCode === 'L000006') {
						Ui.popBox(true, {text: '登录超时，无法继续办理，请登录重新办理业务'});
					} else { // 行方其他系统报错
						Ui.popBox(true, {text: data.ReturnCode + '-' + data.ReturnMessage});
					}
				}, e => { // 404之类的错误
					Ui.loading(false);
					error(e);
				});
			}, e => { // 404之类的错误
				Ui.loading(false);
				error(e);
			});
		}
	}
};

export default axios;
