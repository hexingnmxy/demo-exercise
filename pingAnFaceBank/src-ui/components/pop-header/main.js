export default {
	props: {
		popTitle: {
			type: String,
			default() {
				return '提示';
			}
		},
		showIcon: {
			type: Boolean,
			default() {
				return false;
			}
		},
		popBoxCloseFun: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {

	}
};
