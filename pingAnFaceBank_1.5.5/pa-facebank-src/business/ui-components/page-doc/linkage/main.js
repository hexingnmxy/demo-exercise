import PaLinkage from 'pa-ui/components/linkage/index';
import PaContentSample from '../../components/content-sample/index';
import PaContentSampleHeader from '../../components/content-sample-header/index';

export default {
	data() {
		return {
			level: 3
		};
	},
	computed: {
		linkList() {
			let list = [];
			for (let i = 0; i < 20; i++) {
				list.push(
					{
						text: `重庆市${i}`,
						active: false,
						children: []
					}
				);
				for (let j = 0; j < 20; j++) {
					list[i].children.push(
						{
							text: `铜梁县${i}+${j}`,
							active: false,
							children: []
						}
					);
					for (let k = 0; k < 20; k++) {
						list[i].children[j].children.push(
							{
								text: `铜梁县${i}+${j}+${k}`,
								active: false
							}
						);
					}
				}
			}
			return list;
		}
	},
	components: {
		PaContentSample,
		PaLinkage,
		PaContentSampleHeader
	},
	methods: {
		callback(data) {
			console.log(data);
		}
	}
};
