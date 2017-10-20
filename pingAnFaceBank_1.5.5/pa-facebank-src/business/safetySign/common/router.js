import Home from '../pages/home'; // 读取卡片
import IdentityVerify from '../pages/identityVerify'; // 身份验证(刷银行卡)
import UploadPhotos from '../pages/uploadPhotos'; // 上传身份证和其他材料照片
import ContractSet from '../pages/contractSet'; // 签约设置
import Result from '../pages/result'; // 完成页面

const router = [
	{path: '/home', name: 'Home', component: Home}, // 首页--刷银行卡
	{path: '/identity-verify', name: 'IdentityVerify', component: IdentityVerify}, // 刷身份证
	{path: '/upload-photos', name: 'UploadPhotos', component: UploadPhotos}, // 上传照片
	{path: '/contract-set', name: 'ContractSet', component: ContractSet}, // 签约设置
	{path: '/result', name: 'Result', component: Result} // 结果页
];

export default router;
