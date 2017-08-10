export default {
	data() {
		let hasType;
		let pattern;
		if (this.type) {
			hasType = true;
			if (this.type === 'number') { // 只能输入数字
				pattern = '^\\d*$';
			} else if (this.type === 'money') { // 只能输入金额
				pattern = '^0(\\.\\d{0,2})?$|^[1-9]\\d*(\\.\\d{0,2})?$|^$';
			}
		}
		return {
			valueModel: this.value,
			isShowClearIcon: this.isShowClear, // 是否显示 input清除图标
			isShowErrorTip: false, // 是否显示错误信息提示
			inputDataPattern: hasType ? pattern : this.dataPattern // 输入校验
		};
	},
	props: {
		maxlength: {
			type: String,
			default() {
				return '20';
			}
		},
		placeholder: {
			type: String,
			default() {
				return '请输入...';
			}
		},
		value: {},
		errorTip: {
			type: String,
			default() {
				return '请输入正确的值';
			}
		},
		// input常用的某几种输入校验:number money
		type: {},
		// 输入校验
		dataPattern: {
			type: String,
			default() {
				return '';
			}
		},
		dataPatternOut: {
			type: String,
			default() {
				return '';
			}
		},
		errorText: {
			type: String,
			default() {
				return '';
			}
		},
		disabled: {
			type: Boolean,
			default() {
				return false;
			}
		},
		// 是否显示'清除'按钮
		isShowClear: {
			type: Boolean,
			default() {
				return false;
			}
		}
	},
	watch: {
		valueModel(newValue, oldValue) {
			if (this.inputDataPattern) { // 有输入校验时
				if (new RegExp(this.inputDataPattern).test(newValue)) {
					this.$emit('input', newValue); // 子组件值发生改变 通知父组件值改变
				} else {
					this.valueModel = oldValue;
				}
			} else {
				this.$emit('input', newValue); // 子组件值发生改变 通知父组件值改变
			}
			if (!this.isShowClear) { // 如果父组件始终不想见到'清除'按钮
				return;
			}
			if (!newValue) { // 改变后无值 显示'清除'按钮
				this.isShowErrorTip = false;
				this.isShowClearIcon = false;
			} else { // 改变后有值 显示'清除'按钮
				this.isShowClearIcon = true;
			}
		},
		value() {
			this.valueModel = this.value; // 父组件值发生改变 通知子组件值改变
		}
	},
	methods: {
		clearInput(event) {
			this.valueModel = '';
			// 获得焦点
			event.target.previousElementSibling.focus();
		},
		focus(event) {
			// 避免小键盘挡住input
			// event.target.scrollIntoView(true);

			if (!this.isShowClear) { // 如果父组件始终不想见到'清除'按钮
				return;
			}
			if (this.valueModel) {
				this.isShowClearIcon = true;
			} else {
				this.isShowClearIcon = false;
			}
		},
		// 失去焦点
		blur() {
			if (this.dataPatternOut) { // 有输出校验时
				if (!new RegExp(this.dataPatternOut).test(this.valueModel)) {
					this.isShowErrorTip = true; // 显示错误提示
				} else {
					this.isShowErrorTip = false;
				}
			}
			let _this = this;
			if (!this.isShowClear) { // 如果父组件始终不想见到'清除'按钮
				return;
			}
			setTimeout(function() {
				_this.isShowClearIcon = false;
			}, 100);
		}
	}
};
