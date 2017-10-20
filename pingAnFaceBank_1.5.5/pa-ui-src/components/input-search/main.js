export default {
	data() {
		return {
			valueModel: this.value
		};
	},
	props: {
		// 输入框placeholder文字 可传的值: 任意字符串
		placeholderText: {
			type: String,
			default() {
				return '请输入内容';
			}
		},
		value: {},
		clickSearch: Function
	},
	watch: {
		valueModel(newValue) {
			this.$emit('input', newValue); // 子组件值发生改变 通知父组件值改变
		},
		value() {
			this.valueModel = this.value; // 父组件值发生改变 通知子组件值改变
		}
	},
	methods: {
		paClickSearch(e) {
			// input获得焦点
			e.target.previousElementSibling.focus();
			this.clickSearch();
		}
	}
};
