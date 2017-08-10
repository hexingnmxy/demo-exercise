export default {
	data() {
		return {
			valueModel: this.value
		};
	},
	props: {
		paValue: {
			type: String,
			default() {
				return '-1';
			}
		},
		// 父组件 v-model可以传值过来value
		value: {
			default() {
				return true;
			}
		},
		disabled: {
			default() {
				return false;
			}
		},
		paText: {
			type: String,
			default() {
				return '';
			}
		}
	},
	watch: {
		valueModel(newValue) {
			// 子组件值发生改变 通知父组件值改变
			this.$emit('input', newValue);
		},
		value() {
			// 父组件值发生改变 通知子组件值改变
			this.valueModel = this.value;
		}
	}
};
