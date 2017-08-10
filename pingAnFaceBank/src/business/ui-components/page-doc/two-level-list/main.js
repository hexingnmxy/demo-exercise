// import PaTwoLevelList from 'pingan-ui/dist/components/two-level-list';
import PaTwoLevelList from 'pingan-ui/components/two-level-list/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			firstLevelList: [
				{
					title: '颜色',
					secondLevelList: [
						{
							title: '红色',
							active: true
						},
						{
							title: '绿色',
							active: false
						},
						{
							title: '蓝色',
							active: false
						}
					]
				},
				{
					title: '一级菜单',
					secondLevelList: [
						{
							title: '二级菜单',
							active: false
						},
						{
							title: '三级菜单',
							active: false
						}
					]
				},
				{
					title: '一级菜单'
				}
			]
		};
	},
	components: {
		PaTwoLevelList,
		PaContentSample,
		PaContentSampleHeader
	},
	methods: {
		itemClick(item) {
			console.log(item.title);
		}
	}
};
