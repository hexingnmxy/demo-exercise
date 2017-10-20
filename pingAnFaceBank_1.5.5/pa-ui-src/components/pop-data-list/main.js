import PaDataList from '../../components/data-list/index';
import PaPopHeader from '../../components/pop-header/index';
import PaPopBox from '../../components/pop-box/index';
export default {
	data() {
		return {
			buttons: [
				{
					id: 'ID_OK',
					text: '确认'
				}
			],
			icon: '',
			text: '',
			showIcon: true,
			showDataList: true,
			showPopHeader: true,
			popDataModel: this.checkFlag ? '' : []
		};
	},
	props: {
		datalist: {
			type: Array,
			default() {
				return [];
			}
		},
		title: {
			type: String,
			default() {
				return '';
			}
		},
		checkValue: {
			default() {
				return '';
			}
		},
		checkFlag: {
			type: Boolean,
			default() {
				return true;
			}
		},
		value: {
			type: Boolean,
			default() {
				return false;
			}
		},
		popTitle: {
			type: String,
			default() {
				return '提示';
			}
		},
		finish: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	components: {
		PaDataList,
		PaPopHeader,
		PaPopBox
	},
	watch: {

	},
	computed: {

	},
	methods: {
		finishBox() {
			this.finish(this.popDataModel);
		},
		popBoxCloseFun() {
			this.$emit('input', true);
		}
	}
};
