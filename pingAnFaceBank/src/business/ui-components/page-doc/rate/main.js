// import PaRate from 'pingan-ui/dist/components/rate';
// import PaRate from '../../../../../src-ui/components/rate/index';
import PaRate from 'pingan-ui/components/rate/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			rateOption: {
				// star: '▲',
				// max: 10,
				size: 'max',
				defaultActive: 3,
				disabledDefaultActive: 3 // 必传
			}
		};
	},
	components: {
		PaRate,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		// 选中某个'星星'
		activeRate(event) {
			let index = parseInt(event.target.getAttribute('data-index'), 10);
			if (!index) { // 点击两颗'星星'之间时，event.target为a标签
				return;
			}
			let isCurrentActive = event.target.getAttribute('class');
			if (index === 1 && isCurrentActive) {
				this.rateOption.defaultActive = 0;
			} else {
				this.rateOption.defaultActive = index;
			}
		}
	}
};
