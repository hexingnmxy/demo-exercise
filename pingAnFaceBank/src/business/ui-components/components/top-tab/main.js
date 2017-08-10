export default {
	data() {
		return {
			tabList: this.tabItems
		};
	},
	props: {
		// 标签items
		tabItems: {
			type: Array,
			default() {
				return [];
			}
		},
		// 点击某个item的回调
		clickItem: {
			type: Function,
			default() {
				return () => {};
			}
		}
	},
	computed: {
	},
	methods: {
		click(item) {
			// 改变子组件的值 改变item的active
			for (let i = 0; i < this.tabList.length; i++) {
				this.tabList[i].active = false;
			}
			this.tabList[item.id].active = true;
			// 回调父组件方法
			this.clickItem(item);
		}
	}
};
