// import PaPopBox from 'pingan-ui/dist/components/pop-box';
import PaPopBox from 'pingan-ui/components/pop-box';
import PaPopHeader from '../pop-header';

export default {
	data() {
		return {
			buttons: [{ text: '确定' }],
			disabled: this.isPopDisabled
		};
	},
	props: {
		popTitle: {
			type: String,
			default() {
				return '标题';
			}
		},
		// 是否显示弹出框
		isPopDisabled: {
			type: Boolean,
			default() {
				return true;
			}
		},
		// 点击'关闭'按钮 点击'确定'按钮回调
		closeOrConfirm: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {
		PaPopBox,
		PaPopHeader
	},
	methods: {
		// 点击'关闭'按钮
		close() {
			this.closeOrConfirm('close');
		},
		// 点击'确定'按钮
		finish(id) {
			if (id === 'MASK_CLOSE') { // 点击遮罩 关闭的
				this.close();
			} else { // 点击按钮 关闭的
				this.closeOrConfirm('finish');
			}
		}
	}
};
