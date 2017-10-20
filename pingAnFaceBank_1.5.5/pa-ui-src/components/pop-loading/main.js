import PaMask from '../mask/index.vue';
import './style.less';
export default {
	data() {
		return {

		};
	},
	props: {
		text: {
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
		}
	},
	components: {
		PaMask
	}
};
