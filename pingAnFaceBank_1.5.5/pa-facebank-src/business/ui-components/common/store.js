import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		leftNav: [
			{
				title: '基础样式',
				list: true,
				navBranchList: [
					{
						title: '颜色',
						enTitle: 'Color',
						key: 'color',
						link: '/main/doc/components-color',
						linkDemo: '/main/demo-components-color',
						active: true
					},
					{
						title: '字体',
						enTitle: 'Font',
						key: 'font',
						link: '/main/doc/components-font',
						linkDemo: '/main/demo-components-font',
						active: false
					},
					{
						title: '图标',
						enTitle: 'Icon',
						key: 'icon',
						link: '/main/doc/components-icon',
						linkDemo: '/main/demo-components-icon',
						active: false
					}
				]
			}
		],
		leftNavComponents: [
			{
				title: '表单',
				list: true,
				navBranchList: [
					{
						title: '按钮',
						enTitle: 'Button',
						key: 'button',
						link: '/main/doc/button',
						linkDemo: '/main/demo-button',
						active: true
					},
					{
						title: '排序',
						enTitle: 'Sort',
						key: 'sort',
						link: '/main/doc/sort',
						linkDemo: '/main/demo-sort',
						active: false
					},
					{
						title: '单选框',
						enTitle: 'Radio',
						key: 'radio',
						link: '/main/doc/radio',
						linkDemo: '/main/demo-radio',
						active: false
					},
					{
						title: '单选框',
						enTitle: 'RadioButton',
						key: 'radioButton',
						link: '/main/doc/radio-button',
						linkDemo: '/main/demo-radio-button',
						active: false
					},
					{
						title: '单选框',
						enTitle: 'RadioTab',
						key: 'radioTab',
						link: '/main/doc/radio-tab',
						linkDemo: '/main/demo-radio-tab',
						active: false
					},
					{
						title: '开关',
						enTitle: 'Switch',
						key: 'switch',
						link: '/main/doc/switch',
						linkDemo: '/main/demo-switch',
						active: false
					},
					{
						title: '复选框',
						enTitle: 'Checkbox',
						key: 'checkbox',
						link: '/main/doc/checkbox',
						linkDemo: '/main/demo-checkbox',
						active: false
					},
					{
						title: '多选框',
						enTitle: 'CheckboxButton',
						key: 'checkboxButton',
						link: '/main/doc/checkbox-button',
						linkDemo: '/main/demo-checkbox-button',
						active: false
					},
					{
						title: '评分',
						enTitle: 'Rate',
						key: 'rate',
						link: '/main/doc/rate',
						linkDemo: '/main/demo-checkbox',
						active: false
					},
					{
						title: '输入框',
						enTitle: 'Input',
						key: 'input',
						link: '/main/doc/input',
						linkDemo: '/main/demo-input',
						active: false
					},
					{
						title: '搜索框',
						enTitle: 'InputSearch',
						key: 'inputSearch',
						link: '/main/doc/input-search',
						active: false
					},
					{
						title: '文本域',
						enTitle: 'Textarea',
						key: 'textarea',
						link: '/main/doc/textarea',
						linkDemo: '/main/demo-textarea',
						active: false
					}
				]
			},
			{
				title: '常用样式',
				list: true,
				navBranchList: [
					{
						title: '标签页',
						enTitle: 'Tabs',
						key: 'tabs',
						active: false
					},
					{
						title: '步骤线',
						enTitle: 'StepLine',
						key: 'stepLine',
						active: false
					},
					{
						title: '侧边导航切换',
						enTitle: 'SliderToggle',
						key: 'sliderToggle',
						active: false
					},
					{
						title: '圆点',
						enTitle: 'DotItem',
						key: 'dotItem',
						active: false
					},
					{
						title: '图片显示',
						enTitle: 'ImageShow',
						key: 'imageShow',
						active: false
					},
					{
						title: '二级菜单',
						enTitle: 'TwoLevelList',
						key: 'twoLevelList',
						active: false
					}
				]
			},
			{
				title: '弹框',
				list: true,
				navBranchList: [
					{
						title: '加载框',
						enTitle: 'Loading',
						key: 'loading',
						link: '/main/doc/loading',
						linkDemo: '/main/demo-loading',
						active: false
					},
					{
						title: '弹框',
						enTitle: 'Pop',
						key: 'pop',
						link: '/main/doc/pop-box',
						linkDemo: '/main/demo-pop-box',
						active: false
					},
					{
						title: '遮罩',
						enTitle: 'Mask',
						key: 'mask',
						link: '/main/doc/mask',
						// linkDemo: '/main/demo-pop-box',
						active: false
					},
					{
						title: '数据列表弹框',
						enTitle: 'PopDataList',
						key: 'popDataList',
						link: '/main/doc/pop-data-list',
						linkDemo: '/main/demo-pop-data-list',
						active: false
					}
				]
			},
			{
				title: '布局',
				list: true,
				navBranchList: [
					{
						title: '多级联动',
						enTitle: 'Linkage',
						key: 'linkage',
						link: '/main/doc/linkage',
						// linkDemo: '/main/demo-loading',
						active: false
					},
					{
						title: '选择列表',
						enTitle: 'SelectBox',
						key: 'selectBox',
						link: '/main/doc/select-box',
						linkDemo: '/main/demo-select-box',
						active: false
					},
					{
						title: '轮播图 ',
						enTitle: 'Carousel',
						key: 'carousel',
						link: '/main/doc/carousel',
						linkDemo: '/main/demo-carousel',
						active: false
					}
				]
			}
		],
		leftNavComponentsFb: [
			{
				title: '页面组件',
				list: true,
				navBranchList: [
					{
						title: '结果页面',
						enTitle: 'Return',
						key: 'return',
						active: true
					},
					{
						title: '结果页面',
						enTitle: 'PageResult',
						key: 'pageResult',
						active: false
					},
					{
						title: '侧边导航',
						enTitle: 'navigator',
						key: 'navigator',
						active: false
					},
					{
						title: '刷卡页面',
						enTitle: 'SwipeCard',
						key: 'swipeCard',
						active: false
					},
					{
						title: '上传身份证',
						enTitle: 'TakePhotos',
						key: 'takePhotos',
						active: false
					},
					{
						title: '视频认证',
						enTitle: 'ReadVideo',
						key: 'readVideo',
						active: false
					}
					// {
					//   title: '底部按钮',
					//   enTitle: 'BottomButton',
					//   key: 'bottomButton',
					//   active: true
					// },
					// {
					//   title: 'center-icon-text',
					//   enTitle: 'center-icon-text',
					//   key: 'center-icon-text',
					//   active: true
					// }
				]
			}
		]
	},
	mutations: {
	}
});
