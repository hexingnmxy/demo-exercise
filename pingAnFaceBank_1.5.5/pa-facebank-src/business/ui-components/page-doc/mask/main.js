import PaButton from 'pa-ui/components/button/index';
import PaMask from 'pa-ui/components/mask/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			disabled: true,
			maskType: 'black'
		};
	},
	components: {
		PaButton,
		PaMask,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		openMask() {
			this.disabled = false;
			let $this = this;
			this.maskType = 'black';
			setTimeout(() => {
				$this.disabled = true;
			}, 3 * 1000);
		},
		openTransparent() {
			this.maskType = 'transparent';
			this.disabled = false;
			let $this = this;
			setTimeout(() => {
				$this.disabled = true;
			}, 3 * 1000);
		}
	}
};
