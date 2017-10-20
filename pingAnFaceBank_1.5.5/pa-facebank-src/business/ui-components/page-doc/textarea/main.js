import PaTextarea from 'pa-ui/components/textarea/index';
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
