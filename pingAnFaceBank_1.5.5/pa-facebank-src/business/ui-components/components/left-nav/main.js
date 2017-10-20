import './style.less';

export default {
	data() {
		return {
			activeItem: null
		};
	},
	components: {

	},
	props: {
		navTrunkList: {
			type: Array
		}
	},
	computed: {

	},
	methods: {
		toggleHide(items, event) {
			return true;
			// items.hide      = !items.hide;
			// let tree        = event.target.nextElementSibling;
			// let treeHeight  = parseInt(getComputedStyle(tree).height, 10 );
			// console.log(treeHeight, '=====');
			// if( items.hide ) {
			//     tree        = treeHeight;
			// }
		},
		openComponents(items) {
			if (this.activeItem) {
				this.activeItem.active = false;
			}
			items.active = true;
			// this.$router.push( items.link );
			this.$emit('nav-click', items);
		}
	}
};
