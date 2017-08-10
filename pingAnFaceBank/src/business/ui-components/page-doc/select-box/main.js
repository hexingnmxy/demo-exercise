import PaSelectBox from 'pingan-ui/components/select-box/index';
import PaSelectItem from 'pingan-ui/components/select-item/index';
import PaSelectText from 'pingan-ui/components/select-text/index';
import PaButton from 'pingan-ui/components/button/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			dataList: [
				{
					value: '518000',
					content: '广东省深圳市福田区保税区平安科技中心4F'
				},
				{
					value: '271400',
					content: '山东省济南市市中区泉城路58号'
				},
				{
					value: '672374',
					content: '东北铁岭漠河'
				},
				{
					value: '721231',
					content: '四川省成都市市中区火车站东路2号'
				},
				{
					value: '518000',
					content: '广东省深圳市福田区保税区平安科技中心4F'
				},
				{
					value: '271400',
					content: '山东省济南市市中区泉城路58号'
				},
				{
					value: '672374',
					content: '东北铁岭漠河'
				},
				{
					value: '721231',
					content: '四川省成都市市中区火车站东路2号'
				},
				{
					value: '518000',
					content: '广东省深圳市福田区保税区平安科技中心4F'
				},
				{
					value: '271400',
					content: '山东省济南市市中区泉城路58号'
				},
				{
					value: '672374',
					content: '东北铁岭漠河'
				},
				{
					value: '721231',
					content: '四川省成都市市中区火车站东路2号'
				},
				{
					value: '518000',
					content: '广东省深圳市福田区保税区平安科技中心4F'
				},
				{
					value: '271400',
					content: '山东省济南市市中区泉城路58号'
				},
				{
					value: '672374',
					content: '东北铁岭漠河'
				},
				{
					value: '721231',
					content: '四川省成都市市中区火车站东路2号'
				}
			],
			radioModel: ''
		};
	},
	components: {
		PaSelectBox,
		PaSelectItem,
		PaSelectText,
		PaButton,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		popBox() {
			this.isPopDisabled = false;
		}
	}
};
