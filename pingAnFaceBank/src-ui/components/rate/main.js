export default {
	props: {
		// 最多多少颗星星
		max: {
			type: Number,
			default() {
				return 5;
			}
		},
		// 默认激活数量
		defaultActive: {
			type: Number,
			default() {
				return 0;
			}
		},
		// 星星类型
		star: {
			type: String,
			default() {
				return '★';
			}
		},
		// 星星大小 可传的值有 min mid max
		rateSize: {
			type: String,
			default() {
				return 'mid';
			}
		},
		isDisabled: {
			type: Boolean,
			default() {
				return false;
			}
		}
	},
	computed: {
		size() {
			return `rate-size-${this.rateSize}`;
		},
		disabled() {
			return this.isDisabled ? 'disabled' : '';
		}
	}
};
