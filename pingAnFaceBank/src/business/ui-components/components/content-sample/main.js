// import PaIcon from 'pingan-ui/dist/components/icon';
import PaIcon from 'pingan-ui/components/icon';

export default {
	data() {
		return {
			foldControlText: '显示代码',
			iconType: 'triangle-down',
			styleHeight: 0,
			iconActive: false,
			hover: false,
			height: 0
		};
	},
	props: {
		title: {
			type: String,
			default() {
				return '';
			}
		},
		tips: {
			type: String,
			default() {
				return '';
			}
		}
	},
	methods: {
		contentSampleGetHover() {
			this.hover = true;
		},
		contentSampleLoseHover() {
			this.hover = false;
		},
		contentSampleGetIconActive() {
			this.iconActive = true;
		},
		contentSampleLoseIconActive() {
			this.iconActive = false;
		},
		// 点击'显示按钮'或'显示按钮'
		onIconActive(e) {
			e = e || window.event;
			e.stopPropagation();
			e.preventDefault();
			const codeElement = e.currentTarget.previousElementSibling.children[0];
			this.height = Number.parseInt(getComputedStyle(codeElement).height, 10);
			if (this.styleHeight === 0) {
				this.styleHeight = this.height;
				this.iconType = 'triangle-up';
				this.foldControlText = '隐藏代码';
			} else {
				this.styleHeight = 0;
				this.iconType = 'triangle-down';
				this.foldControlText = '显示代码';
			}
		}
	},
	components: {
		PaIcon
	}
};
