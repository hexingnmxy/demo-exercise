export default {
	data() {
		return {
			topText: this.linkAddress ? '上一步' : '返回首页'
		};
	},
	props: {
		linkAddress: {
			type: String,
			default() {
				return '';
			}
		},
		navigationTitle: {
			type: String,
			default() {
				return '';
			}
		}
	},
	computed: {},
	components: {},
	methods: {
		returnClick(linkAddress) {
			if (linkAddress) {
				this.$router.previous(linkAddress);
			} else {
				this.$drive.goHome();
			}
		},
		navigationIconClick() {
			this.$ui.openNavigator();
		}
	}
};
