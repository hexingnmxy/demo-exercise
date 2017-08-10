// import PaButton from 'pingan-ui/dist/components/button';
import PaButton from 'pingan-ui/components/button/index';
// import PaLoading from 'pingan-ui/dist/components/pop-loading';
// import PaLoading from '../../../../../src-ui/components/pop-loading/index';
import PaLoading from 'pingan-ui/components/pop-loading/index';
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
