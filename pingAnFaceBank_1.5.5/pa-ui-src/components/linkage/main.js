import AutoScroll from './auto-scroll';

export default {
	data() {
		let styleTop = [];
		for (let i = 0; i < this.level; i++) {
			styleTop[i] = {
				top: 0,
				maskBottom: 0
			};
		}
		return {
			listItemHeight: 40,
			autoScroll: new AutoScroll({
				updateMove: this.updateMove,
				updateBottom: this.updateBottom,
				autoEnd: this.autoEnd
			}),
			styleTop,
			scrollIndex: 0,
			controlList: this.list
		};
	},
	computed: {
		currentList() {
			let current = [];
			let currentIndex = this.controlList;
			// set list
			for (let i = 0; i < this.level; i++) {
				current[i] = current[i] || {};
				current[i].list = currentIndex;
				// set active
				for (let j = 0; current[i].list[j]; j++) {
					if (current[i].list[j].active) {
						current[i].number = j;
						current[i].active = current[i].list[j];
						break;
					}
				}
				current[i].active = current[i].active || current[i].list[0];
				current[i].number = current[i].number || 0;
				current[i].top = `${-(current[i].number - 1) * this.itemHeight}px`;

				currentIndex = current[i].active.children;
			}
			return current;
		}
	},
	methods: {
		test() {
			this.currentList[0].active.active = false;
			this.controlList[4].active = true;
		},
		start(event, index) {
			this.scrollIndex = index;
			let $this = event.currentTarget;
			event.$toBottom = $this.clientHeight - $this.offterHeight;
			event.$toTop = this.toTop($this);
			this.autoScroll.moveStart(event);
		},
		move(event, index) {
			let $this = event.currentTarget;
			event.$toBottom = this.toBottom($this);
			event.$toTop = this.toTop($this);
			this.autoScroll.moveIng(event);
		},
		end(event, index) {
			let $this = event.currentTarget;
			event.$toBottom = this.toBottom($this);
			event.$toTop = this.toTop($this);
			this.autoScroll.moveEnd(event);
		},
		updateMove(move) {
			this.styleTop[this.scrollIndex].top = move;
		},
		updateBottom(move) {
			this.styleTop[this.scrollIndex].maskBottom = move;
		},
		toBottom($this) {
			return $this.clientHeight - $this.offsetParent.offsetHeight + this.listItemHeight;
		},
		toTop($this) {
			return this.listItemHeight;
		},
		autoEnd(height) {
			height -= this.listItemHeight;

			let index = height / this.listItemHeight;
			if (height % this.listItemHeight > this.listItemHeight / 2) {
				index++;
			}
			index = ~~index;
			this.styleTop[this.scrollIndex].top = `${index * this.listItemHeight}px`;


			let listIndex = Math.abs(index);

			let current = this.controlList;
			let currentIndex = this.currentList[this.scrollIndex].number;
			for (let i = 0; i < this.scrollIndex; i++) {
				let number = this.currentList[i].number;
				current = current[number].children;
			}
			current[currentIndex].active = false;
			current[listIndex].active = true;

			let styleTop = [];
			for (let i = 0; i < this.level; i++) {
				styleTop[i] = {
					top: 0,
					maskBottom: 0
				};
			}
			this.styleTop = styleTop;

			let changeList = [];
			for (let i = 0; i < this.level; i++) {
				changeList.push(
					this.currentList[i].list[this.currentList[i].number]
				);
			}
			this.change(changeList);
		}
	},
	props: {
		itemHeight: {
			type: Number,
			default() {
				return 40;
			}
		},
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		level: {
			type: Number,
			default() {
				return 1;
			}
		},
		change: {
			type: Function,
			default() {
				return () => {};
			}
		}
	}
};
