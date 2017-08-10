export default {
	props: {
		// 按钮当前状态 可传的值: none up down default
		sortStatus: {
			type: String,
			default() {
				return 'default';
			}
		}
	},
	computed: {
		status() {
			return `sort-status-${this.sortStatus}`;
		}
	}
};
