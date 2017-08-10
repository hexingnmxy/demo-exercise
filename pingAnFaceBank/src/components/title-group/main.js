export default {
	props: {
		// 字体颜色 black gray theme
		titleText: {
			type: String,
			default() {
				return '';
			}
		},
		// 字体大小 min mid max
		tipsText: {
			type: String,
			default() {
				return '';
			}
		}
	}
};
