// import PaCheckbox from 'pa-ui/components/checkbox/index';
import PaCheckbox from '../../../../../pa-ui-src/components/checkbox/index';
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
