// import PaInputSearch from 'pingan-ui/dist/components/input-search';
// import PaInputSearch from '../../../../../src-ui/components/input-search/index';
import PaInputSearch from 'pingan-ui//components/input-search/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			inputValueModel: ''
		};
	},
	components: {
		PaInputSearch,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		// 点击搜索输入框  '放大镜'按钮
		clickSearch() {
			// 查找 inputValueModel 值的逻辑...
			console.log(this.inputValueModel);
		}
	}
};
