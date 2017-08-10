import PaMask from '../mask/index';
import PaButton from '../button/index';
export default {
	data() {
		return {

		};
	},
	props: {
		buttons: {
			type: Array,
			default() {
				return [];
			}
		},
		disabled: {
			type: Boolean,
			default() {
				return true;
			}
		},
		maskType: {
			type: String,
			default() {
				return 'transparent'; // black or transparent
			}
		},
		finish: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {
		PaMask,
		PaButton
	}
};
