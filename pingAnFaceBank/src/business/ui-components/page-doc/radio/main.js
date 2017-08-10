// import PaRadio from 'pingan-ui/dist/components/radio';
// import PaRadio from '../../../../../src-ui/components/radio/index';
import PaRadio from 'pingan-ui/components/radio/index';
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
