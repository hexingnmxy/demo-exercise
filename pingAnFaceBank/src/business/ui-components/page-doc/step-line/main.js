// import PaStepLine from 'pingan-ui/dist/components/step-line';
import PaStepLine from 'pingan-ui/components/step-line/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			stepList1: [
				{
					name: 'step1',
					text: '选卡',
					isActive: false
				},
				{
					name: 'step2',
					text: '开户协议',
					isActive: false
				},
				{
					name: 'step3',
					text: '身份认证',
					isActive: true
				},
				{
					name: 'step4',
					text: '开户信息',
					isActive: false
				},
				{
					name: 'step5',
					text: '增值服务',
					isActive: false
				},
				{
					name: 'step6',
					text: '插卡设密',
					isActive: false
				},
				{
					name: 'step7',
					text: '视频认证',
					isActive: false
				},
				{
					name: 'step8',
					text: '完成',
					isActive: false
				}
			],
			stepList2: [
				{
					name: 'step1',
					text: '选卡',
					isActive: false
				},
				{
					name: 'step2',
					text: '开户协议',
					isActive: true
				},
				{
					name: 'step3',
					text: '身份认证',
					isActive: false
				},
				{
					name: 'step4',
					text: '开户信息',
					isActive: false
				},
				{
					name: 'step5',
					text: '增值服务',
					isActive: false
				}
			],
			stepList3: [
				{
					name: 'step1',
					text: '选卡',
					isActive: false
				},
				{
					name: 'step2',
					text: '开户协议',
					isActive: true
				},
				{
					name: 'step3',
					text: '身份认证',
					isActive: false
				}
			]
		};
	},
	components: {
		PaStepLine,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {

	}
};
