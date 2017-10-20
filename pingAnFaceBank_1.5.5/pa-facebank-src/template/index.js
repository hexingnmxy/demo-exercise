import App from './App';

// 初始化业务模块
let initBusiness = options => {
	Router.addRoutes(options.router); // 加入业务中使用到的路由
	let bussinessApi = options.api; // 某个业务实例中用到的私有接口url

	let bussinessMockData = options.mockData; // 某个业务实例中用到的mock数据;
	// window.Consoles = Console;
	window.Api = Object.assign(Api, bussinessApi); // 包括公用和业务私有的所有接口url
	Store.replaceState(Object.assign(Store.state, options.store)); // 包括公用和业务私有的所有变量
	MockData.bussiness = bussinessMockData; // 包括公用和业务私有的所有mock数据

	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router: Router,
		template: '<App :navigator="navigatorData"></App>',
		components: { App },
		data: { // 给子组件传递的值
			navigatorData: Store.state.navigator // 右侧导航的数据
		}
	});
};

class Business {
	constructor(options) {
		initBusiness(options); // 调用当前类的私有方法--初始化业务
	}
}

export default Business;
