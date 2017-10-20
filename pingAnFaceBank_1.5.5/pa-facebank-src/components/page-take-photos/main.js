import PaPhotograph from '../photograph';
import PaReturn from '../return';
import PaTitle from '../title';
import PaLayoutAutoContent from '../layout-auto-content';
import PaBottomButton from '../bottom-button';

export default {
	data() {
		return {
			otherMaterial: [],
			identification: [
				{
					text: '身份证人像面',
					backgroundImage: 'ID_Face.webp',
					src: '',
					state: 'PHOTO_NONE',
					uploadProgress: 0,
					picType: '0001',
					// cameraType: $config.DRIVE_CAMERA_ID_FACE,
					cameraType: '100',
					data: null
				},
				{
					text: '身份证国徽面',
					backgroundImage: 'ID_Emblem.webp',
					src: '',
					state: 'PHOTO_NONE',
					uploadProgress: 0,
					picType: '0002',
					// cameraType: $config.DRIVE_CAMERA_ID_EMBLEM,
					cameraType: '100',
					data: null
				}
			],
			bottomBtn: [
				{
					text: '下一步',
					disabled: true
				}
			],
			apiImageSave: `/mmarket/${this.proId}.ImageUpload.do`,
			apiImageUpload: `/mmarket/${this.proId}.ImageConfirmUpload.do`
		};
	},
	props: {
		proId: {
			type: String,
			default() {
				return '';
			}
		},
		nextCall: {
			type: Function,
			default() {
				return () => {};
			}
		},
		linkPrevious: {
			type: String,
			default() {
				return '';
			}
		},
		businessJnlNo: {
			type: String,
			default() {
				return '';
			}
		}
	},
	computed: {
	},
	components: {
		PaPhotograph,
		PaReturn,
		PaTitle,
		PaLayoutAutoContent,
		PaBottomButton
	},
	methods: {
		openCamera(item, index) {
		},
		uploadFinish(item) {
		},
		addOtherMaterial() {
		},
		saveInfo() {
		}
	}
};
