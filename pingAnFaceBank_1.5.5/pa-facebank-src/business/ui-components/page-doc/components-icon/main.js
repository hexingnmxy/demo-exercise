import PaIcon from 'pa-ui/components/icon/index';
import ContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			iconList: [
				{ iconClass: 'search' }, // 搜索
				{ iconClass: 'message' }, // 信息
				{ iconClass: 'star-solid' }, // 实星
				{ iconClass: 'star-hollow' }, // 空星
				{ iconClass: 'user' }, // 用户
				{ iconClass: 'delete' }, // 删除
				{ iconClass: 'home' }, // 回首页
				{ iconClass: 'camera' }, // 拍照
				{ iconClass: 'empty' }, // 清空内容
				{ iconClass: 'success-verify' }, // 验证通过
				{ iconClass: 'fail-verify' }, // 验证失败
				{ iconClass: 'visibility' }, // 可见的
				{ iconClass: 'invisibility' }, // 不可见的
				{ iconClass: 'direction-left-single' }, // 向左
				{ iconClass: 'direction-right-single' }, // 向右
				{ iconClass: 'direction-up-single' }, // 向上
				{ iconClass: 'direction-down-single' }, // 向下
				{ iconClass: 'loading' }, // 加载框
				{ iconClass: 'question' }, // 问题
				{ iconClass: 'fail' }, // 失败
				{ iconClass: 'success' }, // 成功
				{ iconClass: 'warning' }, // 警告
				{ iconClass: 'closedown' }, // 关闭
				{ iconClass: 'selected-right-bottom' }, // 选择框右下角标
				{ iconClass: 'triangle-left' }, // 三角形向左
				{ iconClass: 'triangle-right' }, // 三角形向右
				{ iconClass: 'triangle-up' }, // 三角形向上
				{ iconClass: 'triangle-down' }, // 三角形向下
				{ iconClass: 'number-minus' }, // 减少
				{ iconClass: 'number-add' }, // 增加
				{ iconClass: 'risk' }, // 风险
				{ iconClass: 'average-profit' }, // 分红
				{ iconClass: 'shopping-cart' }, // 购物车
				{ iconClass: 'rmb' }, // 人民币
				{ iconClass: 'charge-mode' }, // 美元
				{ iconClass: 'shopping-bag' }, // 购物袋
				{ iconClass: 'navigator' }, // 导航按钮
				{ iconClass: 'server' }, // 客服
				{ iconClass: 'customer' }, // 客户
				{ iconClass: 'cancel-queue' }, // 取消排队
				{ iconClass: 'network-unusual' }, // 网络异常
				{ iconClass: 'location' }, // 地址
				{ iconClass: 'bluetooth' }, // 蓝牙
				{ iconClass: 'check-all' }, // 全选
				{ iconClass: 'light' }, // 光线充足
				{ iconClass: 'all-day-service' } // 7*24小时服务
			]
		};
	},
	components: {
		PaIcon,
		ContentSampleHeader
	}
};
