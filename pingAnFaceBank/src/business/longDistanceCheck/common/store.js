import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		BusinessJnlNo: '', // 业务流水号
		loadingPopText: '请求数据', // loading弹框--文字
		loadingPopDisabled: true, // loading弹框--状态
		popBoxButtons: [ // 普通弹框--按钮
			{id: 'pop_box_ok', text: '确认'}
		],
		popBoxDisabled: true, // 普通弹框--状态
		popBoxText: 'ok', // 普通弹框--文字
		popBoxIcon: '' // 普通弹框--图标
	},
	mutations: {
	}
});
