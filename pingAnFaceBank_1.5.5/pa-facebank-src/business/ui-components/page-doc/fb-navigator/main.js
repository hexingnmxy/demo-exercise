import PaButton from 'pa-ui/components/button';
import PaNavigator from '../../../../components/navigator';
import PaContentSample from '../../components/content-sample';
import PaContentSampleHeader from '../../components/content-sample-header';

export default {
	data() {
		return {
			navSliderToggleBtnText: '显示',
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
		PaButton,
		PaNavigator,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		navSliderToggle() {
			if (this.sliderToggleShow) {
				this.sliderToggleShow = false;
				this.navSliderToggleBtnText = '显示';
			} else {
				this.sliderToggleShow = true;
				this.navSliderToggleBtnText = '隐藏';
			}
		},
		onBreak() {
			if (this.sliderToggleShow) {
				this.sliderToggleShow = false;
				this.navSliderToggleBtnText = '显示';
			} else {
				this.sliderToggleShow = true;
				this.navSliderToggleBtnText = '隐藏';
			}
		}
	}
};
