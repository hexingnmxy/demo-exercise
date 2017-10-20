import PaImageShow from 'pa-ui/components/image-show';
import PaBottomButton from '../bottom-button';
import PaPopBoxTitle from '../pop-box-title';
import PaReturn from '../return';
import idImageShowURL from '../../assets/gif/brush-card-id.gif';
import bankImageShowURL from '../../assets/gif/brush-card-bank.gif';
import LayoutAutoContent from '../layout-auto-content';

export default {
	mounted() {
		if (window.requestIdleCallback) {
			requestIdleCallback(this.itemClick, { timeout: 1000 });
		} else {
			this.itemClick();
		}
	},
	data() {
		return {
			backgroundImage: this.swipeType === 'bankCard' ? `url(${bankImageShowURL})` : `url(${idImageShowURL})`,
			bankText: this.swipeType === 'bankCard',
			isShowReSwipeBtn: false, // 是否显示 '重新刷卡'按钮
			// 弹出框 按钮
			buttons: [
				{
					text: '确定'
				}
			],
			// 弹出框 是否显示
			disabled: true,
			// 弹出框 姓名
			idCardName: '',
			// 弹出框 身份证号
			idCardNo: '',
			// 弹出框 头像
			idCardPhoto: '',
			// 右下角按钮
			btnList: [
				{
					text: '重新刷卡',
					disabled: this.value
				}
			],
			// 卡片信息
			cardData: {}
		};
	},
	watch: {
		value() {
			this.btnList[0].disabled = this.value;
		}
	},
	props: {
		// 刷卡类型 可传的值 id bankCard
		swipeType: {
			type: String,
			default() {
				return 'id';
			}
		},
		// 刷银行卡时，刷卡结束是否弹出密码框; 刷身份证时，不需要传这个属性; 默认值 true
		popPassword: {
			type: Boolean,
			default() {
				return true;
			}
		},
		value: {
			type: Boolean,
			default() {
				return true;
			}
		},
		// 点击上一步按钮时，跳转的路由
		linkAddress: {
			type: String,
			default() {
				return '';
			}
		},
		// 刷卡成功的回调
		swipeSuccess: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	methods: {
		// 点击了右下角 '重新刷卡'按钮
		itemClick() {
		},
		// 身份证弹出框 点击'确定'按钮时回调父组件方法
		swipeCardCallback() {
			this.swipeSuccess(this.cardData); // 调用父组件方法
			this.disabled = true; // 隐藏身份证弹出框
		}
	},
	components: {
		PaBottomButton,
		PaReturn,
		PaImageShow,
		LayoutAutoContent,
		PaPopBoxTitle
	}
};
