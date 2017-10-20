import TopTab from '../../components/top-tab/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			// tabsList:[
			//   {
			//     title: '选项一',
			//     active: true,
			//     id:'No1'
			//   },
			//   {
			//     title: '选选选项二',
			//     active: false,
			//     id:'No2'
			//   },
			//   {
			//     title: '选选选选项三',
			//     active: false,
			//     id:'No3'
			//   },
			//   {
			//     title: '选选项四',
			//     active: false,
			//     id:'No4'
			//   }
			// ],
			tabItems: [
				{ id: 0, title: '全 部', active: true },
				{ id: 1, title: '选项一', active: false },
				{ id: 2, title: '选项二', active: false },
				{ id: 3, title: '选项三', active: false },
				{ id: 4, title: '选项四', active: false }
			],
			callback(item) {

			}
		};
	},
	components: {
		// PaTabs,
		TopTab,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		// 点击'top-tab'组件的某个item
		topTabClickItem(item) {
			// this.showPageId = item.id; // 改变showId值
		}
	}
};
