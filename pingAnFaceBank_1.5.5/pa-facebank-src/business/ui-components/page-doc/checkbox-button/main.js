import PaCheckboxButton from 'pa-ui//components/checkbox-button/index';
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
		PaCheckboxButton,
		PaContentSample,
		PaContentSampleHeader
	}
};
