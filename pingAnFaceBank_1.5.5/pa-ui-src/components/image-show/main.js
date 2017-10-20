export default {
	data() {
		return {

		};
	},
	props: {
		backgroundColor: {
			type: String,
			default() {
				return 'transparent';
			}
		},
		backgroundImage: {
			type: String,
			default() {
				return '';
			}
		}
	},
	computed: {
		background() {
			return `image-show-box-${this.backgroundColor}`;
		}
	}
};
