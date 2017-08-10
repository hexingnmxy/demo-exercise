// import PaButton from 'pingan-ui/dist/components/button';
import PaButton from 'pingan-ui/components/button/index';
// import PaPopDataList from 'pingan-ui/dist/components/pop-data-list';
// import PaPopDataList from '../../../../../src-ui/components/pop-data-list/index';
import PaPopDataList from 'pingan-ui/components/pop-data-list/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			disabled: true,
			datalist: [],
			popTitle: '',
			checkFlag: false,
			paDataListModel: [],
			checkValue: []
		};
	},
	components: {
		PaPopDataList,
		PaButton,
		PaContentSample,
		PaContentSampleHeader
	},
	computed: {
	},
	methods: {
		openPopDataList() {
			this.disabled = false;
			this.popTitle = '邮编查询';
			this.checkFlag = false;
			this.checkValue = ['518000', '271400'];
			this.datalist = [
				{
					titile: '福田',
					value: '518000',
					content: '广东省深圳市福田区保税区平安科技中心4F',
					time: '8:00-18:00'
				},
				{
					titile: '济南',
					value: '271400',
					content: '山东省济南市市中区泉城路58号',
					time: '7:00-22:00'
				},
				{
					titile: '漠河',
					value: '672374',
					content: '东北铁岭漠河',
					time: '2:00-8:00'
				},
				{
					titile: '成都',
					value: '7212311',
					content: '四川省成都市市中区火车站东路2号',
					time: '1:00-24:00'
				}
			];
		},
		finish(data) {
			this.disabled = true;
			console.log(data);
		}
	}
};
