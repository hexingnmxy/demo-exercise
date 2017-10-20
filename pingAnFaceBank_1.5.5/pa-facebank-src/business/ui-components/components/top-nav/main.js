import './style.less';
// import PaTopNavFont from '../top-nav-font';

export default {
	data() {
		return {
			navList: [
				{
					text: '设计规范',
					active: true,
					link: '/ui/specification'
				},
				{
					text: '组件库',
					active: false,
					link: '/ui/components'
				},
				{
					text: 'FB组件库',
					active: false,
					link: '/ui/components-fb'
				}
			],
			active: 0
		};
	},
	components: {
		// PaTopNavFont
	},
	props: {

	},
	methods: {
		changeStatusFun(index) {
			this.navList[this.active].active = false;
			this.active = index;
			this.navList[index].active = true;
			this.$router.push(this.navList[index].link);
		}
	}
};
