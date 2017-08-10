import './style.less';
export default {
	computed: {
		bg() {
			return this.type === 'black' ? 'rgba(0,0,0,0.5)' : 'transparent';
		}
	},
	props: {
		disabled: {
			type: Boolean,
			default() {
				return false;
			}
		},
		type: {
			type: String,
			default() {
				return 'black'; // black or transparent
			}
		}
	}
};
