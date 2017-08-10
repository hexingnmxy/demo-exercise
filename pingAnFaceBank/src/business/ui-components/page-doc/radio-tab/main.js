// import RadioTab from 'pingan-ui/dist/components/radio-tab';
// import RadioTab from '../../../../../src-ui/components/radio-tab/index';
import RadioTab from 'pingan-ui/components/radio-tab/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			periodModel: '2', // 周期Model
			items: [
				{ 'text': '日', 'value': '0' },
				{ 'text': '周', 'value': '1' },
				{ 'text': '月', 'value': '2' }
			]
		};
	},
	components: {
		RadioTab,
		PaContentSample,
		PaContentSampleHeader
	}
};
