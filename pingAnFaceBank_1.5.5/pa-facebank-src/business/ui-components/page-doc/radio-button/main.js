import PaRadioButton from 'pa-ui/components/radio-button/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			foodModel: 'apple',
			toolModel: 'bus'
		};
	},
	components: {
		PaRadioButton,
		PaContentSample,
		PaContentSampleHeader
	}
};
