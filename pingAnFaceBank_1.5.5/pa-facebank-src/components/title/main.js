export default {
	props: {
		// 字体颜色 black gray theme
		textColor: {
			type: String,
			default() {
				return 'gray';
			}
		},
		// 字体大小 min 20 mid 22 max 32
		textSize: {
			type: String,
			default() {
				return 'min';
			}
		}
	},
	computed: {
		color() {
			return `text-color-${this.textColor}`;
		},
		size() {
			return `text-size-${this.textSize}`;
		}
	}
};
