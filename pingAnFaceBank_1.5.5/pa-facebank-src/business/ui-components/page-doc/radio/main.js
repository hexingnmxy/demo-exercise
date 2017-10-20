// import PaRadio from 'pa-ui/components/radio/index';
import PaRadio from '../../../../../pa-ui-src/components/radio/index';
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
		PaRadio,
		PaContentSample,
		PaContentSampleHeader
	}
};
