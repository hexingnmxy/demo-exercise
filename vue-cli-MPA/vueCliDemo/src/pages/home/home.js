var  pageCommon =  require('../../components/comm');
// var  url = require('./module/config');
// var  url = require('./module/config');
import {ccl} from './module/config'

console.log(ccl);

//页面加载公共初始方法
pageCommon.init();
var home = {
	data:{

	},
	options:{

	},
	pageEntryLoad:function(){
		console.log(1111)
	}
};
home.pageEntryLoad();