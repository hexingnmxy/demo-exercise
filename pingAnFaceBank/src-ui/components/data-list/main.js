import PaRadio from '../radio/index.vue';
import PaCheckbox from '../checkbox/index.vue';

export default {
	data() {
		return {
			dataModel: this.checkFlag ? '' : []
		};
	},
	created: function() {
		this.dataModel = this.checkFlag ? '' : [];
		if (this.checkValue) {
			this.dataModel = this.checkValue;
		}
	},
	activated: function() {
		this.dataModel = this.checkFlag ? '' : [];
	},
	props: {
		datalist: {
			type: Array,
			default() {
				return [];
			}
		},
		title: {
			type: String,
			default() {
				return '';
			}
		},
		content: {
			type: String,
			default() {
				return '';
			}
		},
		// 父组件通过 v-model 传过来的
		value: {
			default() {
				return '';
			}
		},
		checkValue: {
			default() {
				return '';
			}
		},
		text: {
			type: String,
			default() {
				return '';
			}
		},
		showDataList: {
			type: Boolean,
			default() {
				return false;
			}
		},
		// 默认 单选
		checkFlag: {
			type: Boolean,
			default() {
				return true;
			}
		}
	},
	components: {
		PaRadio,
		PaCheckbox
	},
	watch: {
		dataModel(newValue) {
			// 子组件值发生改变 通知父组件值改变
			this.$emit('input', newValue);
		}
	}

};
