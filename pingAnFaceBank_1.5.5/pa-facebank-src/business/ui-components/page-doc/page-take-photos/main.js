// import TakePhotos             from '../../../../components/take-photos';
import TakePhotos from '../../../../components/page-take-photos';
import PaContentSample from '../../components/content-sample';
import PaContentSampleHeader from '../../components/content-sample-header';
// import { api, proId } from '../../config/base-config';

export default {
	data() {
		// const { BusinessJnlNo } = this.$store.state.idInfo;
		const { BusinessJnlNo } = {

		};

		return {
			BusinessJnlNo,
			proId: ''
		};
	},
	components: {
		TakePhotos,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		next() {
			this.$router.next('/user-info');
		}
	}
};
