import './style.less';

export default {
	data() {
		return {
			switchBtn: {
				'switch-btn-base': true,
				'switch-btn': false
			},
			checked: this.value,
			disable: this.disabled
		};
	},
	props: {
		// 父组件 v-model传过来的值
		value: {
			type: Boolean,
			default() {
				return false;
			}
		},
		disabled: {
			type: Boolean,
			default() {
				return false;
			}
		}
	},
	methods: {
		switchClickFun() {
			this.switchBtn['switch-btn'] = true;
			this.checked = !this.checked;
			this.$emit('input', this.checked);
		}
	}
};
