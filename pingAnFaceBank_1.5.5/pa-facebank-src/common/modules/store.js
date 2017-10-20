export default {
	state: {
		Teller: {}, // 柜员信息
		PrdId: '', // 业务ID
		BusinessJnlNo: '', // 业务流水号
		TraceId: '', // 跟踪流水号
		idCardInfo: {}, // 身份证信息
		bankCardInfo: {}, // 银行卡信息
		checkIDRes: {}, // 联网核查接口返回的结果

		loadingPopText: '请求数据', // loading弹框--文字
		loadingPopDisabled: true, // loading弹框--状态
		popBoxButtons: [ // 普通弹框--按钮
			{id: 'pop_box_ok', text: '确认'}
		],
		popBoxDisabled: true, // 普通弹框--状态
		popBoxText: 'ok', // 普通弹框--文字
		popBoxIcon: '', // 普通弹框--图标
		maskDisabled: true, // 遮罩默认隐藏

		routeNameList: [], // 头部组件 保存进入单页面的顺序 默认为空
		returnLink: '', // 头部组件 返回上一步的链接 默认为空

		// 头部导航栏
		stepList: [
			{
				name: 'step1',
				text: '读取卡片',
				isActive: true
			},
			{
				name: 'step2',
				text: '身份验证',
				isActive: false
			},
			{
				name: 'step3',
				text: '完成',
				isActive: false
			}
		]
	}
};
