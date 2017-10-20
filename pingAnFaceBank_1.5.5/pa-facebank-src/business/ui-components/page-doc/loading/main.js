import PaButton from 'pa-ui/components/button/index';
import PaLoading from 'pa-ui/components/pop-loading/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			disabled: true
		};
	},
	components: {
		PaButton,
		PaLoading,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		openLoading() {
			this.disabled = false;
			let $this = this;
			setTimeout(() => {
				$this.disabled = true;
			}, 3 * 1000);
		}
	}
};
