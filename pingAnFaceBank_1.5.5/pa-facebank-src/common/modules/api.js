// 公用的接口url
export default {
	getServerTime: '/mmarket/Timestamp.do', // 获取时间戳
	getBusinessJnlNo: '/mmarket/Common.InitBusinessJnlNo.do', // 获取业务流水号
	getTraceId: '/mmarket/Common.InitTraceId.do', // 获取跟踪流水号
	getAdsInfo: 'GetAdsInfo.do', // 获取结果页面的"广告图片"路径
	imageUpload: 'ImageUpload.do', // 拍完身份证时，上传单张照片
	imageConfirmUpload: 'ImageConfirmUpload.do' // 所有图片上传
};
