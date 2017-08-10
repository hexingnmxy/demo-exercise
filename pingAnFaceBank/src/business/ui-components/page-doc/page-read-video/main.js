// import * as type from '../config/mutation-types';
// import { proId, api } from '../../config/base-config';
import ReadVideo from '../../../../components/read-video';
import PaContentSample from '../../components/content-sample';
import PaContentSampleHeader from '../../components/content-sample-header';

export default {
	mounted() {
		// 这是视频密码
		// this.$drive.setVideoPwdInfo({
		//   message : "提醒：交易密码不可包含6位重复数字、6位连续数字、出生日期、" +
		//   "证件号码、手机号、卡号且不可与初始密码一致，请安全设置密码。"
		// });
	},
	data() {
		// const { BusinessJnlNo } = this.$store.state.idInfo;
		const { BusinessJnlNo } = {};
		return {
			BusinessJnlNo,
			// proId
			proId: ''
		};
	},
	components: {
		ReadVideo,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		finish() {
			// this.$store.commit(type.SAVE_BUSINESS_RESULT, true);
			this.$router.next('/result');
		},
		error() {
			// this.$store.commit(type.SAVE_BUSINESS_RESULT, false);
			this.$router.next('/result');
		},
		pdfFinish() {
			// this.$core.authSetPwdPost($config.API_TIMESTAMP).then(data => {
			// 时间戳加密密码
			// const passwordKey = this.$drive.getPasswordKey(data.TimeStamp);
			// const params = {
			// 	BusinessJnlNo: this.BusinessJnlNo,
			// 	UmId: this.$store.state.base.userInfo.UmId,
			// 	CertType: this.$store.state.cardData.CertType,
			// 	PassWord: passwordKey,
			// 	CurrentStep: 'submit',
			// 	Processtype: '0' // 0.半自助、1.零自助、2.全自助
			// };
			// this.$core.authPost(api.OpenCifCardApply, params).then(data => {
			// 	this.$store.commit(type.SAVE_RESULT_DATA, data);
			// });
			// });
		}
	}
};
