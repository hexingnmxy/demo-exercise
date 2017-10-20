import Business from '../../template/index'; // 业务的构造函数
import router from './common/router'; // 当前业务用到的路由
import store from './common/store'; // 保存仅当前业务用到的所有变量
import api from './common/api'; // 当前业务用到的接口url
import mockData from './common/mock'; // 当前业务用到的mock数据(与api相对应)

// 实例化业务
/* eslint-disable no-new */
new Business({
    router: router,
    store: store,
    api: api,
    mockData: mockData
});
