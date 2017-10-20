import PaSliderToggle from 'pa-ui/components/slider-toggle/index';
import PaButton from 'pa-ui/components/button/index';
import PaStepLine from 'pa-ui/components/step-line/index';
import PaMask from 'pa-ui/components/mask/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			sliderToggleBtnText: '显示',
			sliderToggleShow: false,
			stepList: [
				{
					name: 'step1',
					text: '选卡',
					isVisited: true,
					isActive: false
				},
				{
					name: 'step2',
					text: '开户协议',
					isVisited: false,
					isActive: true
				},
				{
					name: 'step3',
					text: '身份认证',
					isVisited: false,
					isActive: false
				},
				{
					name: 'step4',
					text: '开户信息',
					isVisited: false,
					isActive: false
				},
				{
					name: 'step5',
					text: '增值服务',
					isVisited: false,
					isActive: false
				},
				{
					name: 'step6',
					text: '插卡设密',
					isVisited: false,
					isActive: false
				},
				{
					name: 'step7',
					text: '视频认证',
					isVisited: false,
					isActive: false
				},
				{
					name: 'step8',
					text: '完成',
					isVisited: false,
					isActive: false
				}
			]
		};
	},
	components: {
		PaSliderToggle,
		PaButton,
		PaStepLine,
		PaMask,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		sliderToggle() {
			if (this.sliderToggleShow) {
				this.sliderToggleShow = false;
				this.sliderToggleBtnText = '显示';
			} else {
				this.sliderToggleShow = true;
				this.sliderToggleBtnText = '隐藏';
			}
		},
		maskClick() {
			this.sliderToggleShow = false;
		}
	}
};
