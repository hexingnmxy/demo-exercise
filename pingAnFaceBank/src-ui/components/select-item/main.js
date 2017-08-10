import PaRadio from '../radio';
import PaCheckbox from '../checkbox';

export default {
	data() {
		return {
			toolModel: this.value
		};
	},
	watch: {
		toolModel() {
			this.$emit('input', this.toolModel);
		},
		value() {
			this.toolModel = this.value;
		}
	},
	mounted() {
		this.$nextTick(() => {
		});
	},
	props: {
		selectType: {
			type: String,
			default() {
				return 'radio';
			}
		},
		radioValue: {
			type: String,
			default() {
				return '';
			}
		},
		value: {
			type: String,
			default() {
				return '';
			}
		}
	},
	components: {
		PaRadio,
		PaCheckbox
	},
	computed: {
		isRadioBox() {
			return this.selectType === 'radio';
		},
		activeItem() {
			return this.radioValue;
		}
	},
	methods: {

	}
};
