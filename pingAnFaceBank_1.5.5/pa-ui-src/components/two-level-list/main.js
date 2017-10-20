export default {
	data() {
		return {
			activeItem: null
		};
	},
	props: {
		firstLevelList: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	computed: {

	},
	methods: {
		itemClick(items) {
			if (this.activeItem) {
				this.activeItem.active = false;
			}
			items.active = true;
			this.$emit('itemClick', items);
		}
	}
};
