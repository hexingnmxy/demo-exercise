// import PaTextarea from 'pingan-ui/dist/components/textarea';
// import PaTextarea from '../../../../../src-ui/components/textarea/index';
import PaTextarea from 'pingan-ui/components/textarea/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			textareaRows: 5,
			inputValueModel: 'text-area'
		};
	},
	components: {
		PaTextarea,
		PaContentSample,
		PaContentSampleHeader
	}
};
