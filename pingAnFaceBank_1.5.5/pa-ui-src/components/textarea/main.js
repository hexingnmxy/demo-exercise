export default {
	data() {
		return {
			valueModel: this.value,
			isFocus: false
		};
	},
	props: {
		// 最多输入多少个字 可传的值: 任意数字
		max: Number,
		// 是否显示计数器
		showCounter: {
			type: Boolean,
			default() {
				return true;
			}
		},
		value: {},
		// 是否可输入 可传的值 true false
		disabled: {
			type: Boolean,
			default() {
				return false;
			}
		},
		rows: {
			type: Number,
			default: 3
		},
		placeholder: String
	},
	computed: {
		count() {
			return this.valueModel.replace(/\n/g, 'aa').length;
		}
	},
	watch: {
		valueModel(newValue, oldValue) {
			if (newValue.replace(/\n/g, 'aa').length > this.max) {
				this.valueModel = oldValue;
			} else {
				this.$emit('input', newValue); // 子组件值发生改变 通知父组件值改变
			}
		},
		value() {
			this.valueModel = this.value; // 父组件值发生改变 通知子组件值改变
		}
	},
	methods: {
		onFocus() {
			this.isFocus = true;
		},
		onBlur() {
			this.isFocus = false;
		},
		onKeyDown(event) {
			let target = event.target;
			let keyCodeArry = [8, 37, 38, 39, 40]; // 退格键、方向键
			if (target.value.replace(/\n/g, 'aa').length >= target.maxLength) {
				if (target.selectionEnd > target.selectionStart) {
					return;
				}
				if (keyCodeArry.indexOf(event.keyCode) > -1) { // 退格键
					return;
				}
				window.event.preventDefault(); // 阻止输入
			}
		}
	}
};
