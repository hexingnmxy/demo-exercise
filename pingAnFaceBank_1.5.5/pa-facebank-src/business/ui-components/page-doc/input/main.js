import PaInput from 'pa-ui/components/input/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			inputValueModel: '',
			inputValueNoClearModel: '', // 没有'清除'按钮
			inputNumberValueModel: '', // 只能输入数字
			inputMoneyValueModel: '', // 只能输入金额
			inputCustomValueModel: '', // 只能输入字母
			inputCustomTelValueModel: '', // 只能输入手机号码
			inputCustomTipValueModel: ''
		};
	},
	components: {
		PaInput,
		PaContentSample,
		PaContentSampleHeader
	}
};
