// import PaSwitch from 'pingan-ui/dist/components/switch';
// import PaSwitch from '../../../../../src-ui/components/switch/index';
import PaSwitch from 'pingan-ui/components/switch/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default{
	data() {
		return {
			checked: true
		};
	},
	components: {
		PaSwitch,
		PaContentSample,
		PaContentSampleHeader
	}
};
