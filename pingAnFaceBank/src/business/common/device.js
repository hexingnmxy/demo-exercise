let DevicePlugin = {};

let createTempFunc = function (callbackFun) {
    let createTime = new Date().getTime();
    let tempFuncName = `deviceTempFunc_${createTime}`;
    window[tempFuncName] = function (code, msg) {
        eval(callbackFun)(code, msg);
        delete window[tempFuncName];
    };
    return tempFuncName;
};

DevicePlugin.install = (Vue, options) => {

	// 添加实例方法
	Vue.prototype.$device = {

        //停止联网核查
        stopAuth: function () {
            if(env==='dev'){
                return;
            }
            try {
                appHost.stopVTMService();
            }
            catch (e) {
                alert(e);
            }
        },

		// 给app传递业务流水号
		setBusinessJnlNo(JnlNo) {
            if(env==='dev'){
                return;
           }
            try{
               appBean.setBusninessNo(JnlNo);
           }catch (e){
               alert(e);
           }
        },
        // 给app传递业务ID
        setBusninessID(String) {
            if(env==='dev'){
                return;
            }
            try{
                appBean.setBusninessID(String);
            }catch (e){
                alert(e);
            }
        },
        // 远程检查 呼叫视频连接
        longDistanceOpenAuth: function(callbackFun, UmId) {
            if(env==='dev'){
                setTimeout(function () {
                    callbackFun("PH000");
                }, 2000);
                return;
            }
            try {
                appHost.SpecificAgentCall(createTempFunc(callbackFun), UmId);
            }
            catch (e) {
                alert(e);
            }
        },
	};
};

export default DevicePlugin;
