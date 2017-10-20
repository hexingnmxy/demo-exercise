import mock from '../common/modules/mock'; // 公用的 mock 数据

window.MockData = mock; // 只有开发模式、debug模式才有用到 MockData 这个全局变量
window.Env = 'dev'; // 当前是开发环境
