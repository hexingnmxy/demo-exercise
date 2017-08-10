// import PaButton               from 'pingan-ui/dist/components/button';
import PaButton from 'pingan-ui/components/button/index';
// import PaPopBox               from 'pingan-ui/dist/components/pop-box';
// import PaPopBox from '../../../../../src-ui/components/pop-box/index';
import PaPopBox from 'pingan-ui/components/pop-box/index';
import PaContentSample from '../../components/content-sample';
import PaContentSampleHeader from '../../components/content-sample-header';

export default {
	data() {
		return {
			disabled: true,
			buttons: [],
			text: '',
			icon: ''
		};
	},
	components: {
		PaButton,
		PaPopBox,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		openConfirm() {
			this.buttons = [
				// ok button
				{
					id: 'POP_BOX_OK',
					text: '确认'
				},
				// cancel btuuon
				{
					id: 'POP_BOX_CANCEL',
					text: '取消'
				}
			];
			this.text = '这是弹框';
			this.icon = '';

			this.disabled = false;
		},
		openAlert() {
			this.buttons = [
				{
					id: 'ID_OK',
					text: '确认'
				}
			];
			this.text = '这是弹框';
			this.disabled = false;
			this.icon = '';
		},
		openIconBox() {
			this.buttons = [
				{
					id: 'ID_OK',
					text: '确认'
				}
			];
			this.text = '这是弹框';
			this.icon = 'icon-warning';
			this.disabled = false;
		},

		onFinish(ID) {
			this.disabled = true;
		}
	}
};
