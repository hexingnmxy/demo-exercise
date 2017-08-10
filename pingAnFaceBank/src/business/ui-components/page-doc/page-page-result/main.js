import PageResult from '../../../../components/page-page-result';
// import { proId } from '../../config/base-config';
import PaContentSample from '../../components/content-sample';
import PaContentSampleHeader from '../../components/content-sample-header';

export default {
	data() {
		return {
			// LocCode: this.$store.state.base.userInfo.LocCode,
			LocCode: 'xx2xx',
			// proId,
			proId: '',
			// state: this.$store.state.resultStatus ? 'success' : 'fail',
			state: 'success',
			// resultData: this.$store.state.resultData
			resultData: {
				proId: '123',
				CifName: '林',
				CardNo: '546513********3113',
				CertName: '羊年白金卡'
			}
		};
	},
	components: {
		PageResult,
		PaContentSample,
		PaContentSampleHeader
	}
};
