export default {
	props: {
		// 按钮大小 可传的值: min mid max
		btnSize: {
			type: String,
			default() {
				return 'mid';
			}
		},
		// 是否空心 可传的值: empty full rectangle-empty rectangle-full
		btnType: {
			type: String,
			default() {
				return 'full';
			}
		},
		// 按钮图标 可传的值 图标样式 eg: icon-search
		btnIcon: {
			type: String,
			default() {
				return '';
			}
		},
		// 是否显示  可传的值: inline  hide
		btnDisplay: {
			type: String,
			default() {
				return 'inline';
			}
		},
		// 是否可点击 可传的值 true false
		btnDisabled: {
			type: Boolean,
			default() {
				return false;
			}
		}
	},
	computed: {
		type() {
			return `button-type-${this.btnType}`;
		},
		size() {
			return `button-size-${this.btnSize}`;
		},
		display() {
			return `button-display-${this.btnDisplay}`;
		}
	}
};
