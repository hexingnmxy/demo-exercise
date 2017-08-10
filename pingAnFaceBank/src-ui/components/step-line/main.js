export default {
	data() {
		return {
			// componentStepLine: '100%'
		};
	},
	mounted() {
		this.$nextTick(() => {

		});
	},
	props: {
		stepList: {
			type: Array,
			default() {
				return [

				];
			}
		}
	},
	computed: {
		stepLists() {
			let stepLists = [];
			let visited = true;
			for (let i = 0; this.stepList[i]; i++) {
				const stepListItem = this.stepList[i];

				if (stepListItem.isActive && visited) {
					visited = false;
				}

				stepListItem.isVisited = visited;
				stepLists.push(stepListItem);
			}
			return stepLists;
		},
		componentStepLine() {
			if (this.stepList.length === 3) return '50%';
			if (this.stepList.length === 4) return '65%';
			if (this.stepList.length === 5) return '80%';
			return '100%';
		}
	},
	components: {

	}
};
