import SwipeCard from '../../../../components/swipe-card';
import PaContentSample from '../../components/content-sample';
import PaContentSampleHeader from '../../components/content-sample-header';
import { api } from '../../config/base-config';

export default {
	data() {
		return {
			buttonState: true
		};
	},
	components: {
		SwipeCard,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		finish(info) {
			info.idNo = '210204197008045252';
			info.fullName = '巫锁';
			info.sex = '1';

			// const { BusinessJnlNo } = this.$store.state.idInfo;
			const { BusinessJnlNo } = '';
			// const { UmId }      = this.$store.state.base.userInfo;
			const { UmId } = '';
			const params = {
				BusinessJnlNo,
				UmId,
				IdType: '1',
				IdNo: info.idNo, // 身份证  老业务里写的银行卡号 千万别信
				CifName: info.fullName, // 客户姓名
				Sex: (info.sex == 1) ? 'M' : 'F', // 客户性别
				BirthDate: info.birthday,
				Nation: info.nation,
				Address: info.idAddr,
				IdIssuer: info.idOrg, // 证件签发机关
				IssDate: info.beginDate,
				ExpiryDate: info.endDate,
				IdHeadPhoto: info.photodata, // 身份证头像
				Processtype: '0', // 自助方式 0:半自助
				CurrentStep: 'scanidcard' // 当前步数
			};
			// this.$ui.openLoading('认证身份信息...');
			// this.$core.post( api.spacialClientQry, params).then( ( data ) => {
			//   this.$store.commit(type.SAVE_ID_INFO, data);
			//
			//   //应服务端暂存接口要求去除无用数据字段
			//   delete data.Mobile;
			//   delete data._exceptionFieldName;
			//   delete data.ReturnMessage;
			//   delete data.ReturnCode;
			//
			//   if (data.VerifyResult === '00' || data.VerifyResult === '01') {
			//     //拍照页
			//     this.$router.next('/upload-card-id');
			//   } else {
			//     this.$ui.openErrorBox( data.VerifyFailMsg );
			//   }
			// }, () => {
			//   this.buttonState            = false;
			// });
		}
	}
};
