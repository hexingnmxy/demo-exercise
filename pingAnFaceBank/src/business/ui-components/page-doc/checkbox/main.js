// import PaCheckbox from 'pingan-ui/dist/components/checkbox';
// import PaCheckbox from '../../../../../src-ui/components/checkbox/index';
import PaCheckbox from 'pingan-ui/components/checkbox/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			paSingleValueModel: false,
			paMultipleValueModel: ['apple'],
			vehicleCheckbox: ['bike']
		};
	},
	components: {
		PaCheckbox,
		PaContentSample,
		PaContentSampleHeader
	}
};
