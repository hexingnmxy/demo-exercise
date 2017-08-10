export default {
	data() {
		return {
			// type: `icon-${this.iconType}`
		};
	},
	props: {
		iconType: {
			type: String,
			default() {
				return '';
			}
		},
		iconClass: {
			type: String,
			default() {
				return '';
			}
		}
	},
	computed: {
		type() {
			return `icon-${this.iconType} ${this.iconClass}`;
		}
	}
};
