// import PaCheckboxButton from 'pingan-ui/dist/components/checkbox-button';
// import PaCheckboxButton from '../../../../../src-ui/components/checkbox-button/index';
import PaCheckboxButton from 'pingan-ui//components/checkbox-button/index';
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
