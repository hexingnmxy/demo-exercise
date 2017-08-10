// import PaRadioButton from 'pingan-ui/dist/components/radio-button';
// import PaRadioButton from '../../../../../src-ui/components/radio-button/index';
import PaRadioButton from 'pingan-ui/components/radio-button/index';
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
