import PaButton from 'pa-ui/components/button';

export default {
	data() {
		return {
			btnArray: this.btnList
		};
	},
	props: {
		// 位置类型 默认auto 可传的值 auto、fixed
		positionType: {
			type: String,
			default() {
				return 'auto';
			}
		},
		btnList: {
			type: Array,
			default() {
				return [{ text: '下一步' }];
			}
		},
		itemClick: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {
		PaButton
	},
	computed: {
		bottomBtnListCss() {
			return `bottom-btn-list-${this.positionType}`;
		}
	}
};
