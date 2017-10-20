// 返回唯一的方法名称(字符串形式)，并全局定义这个方法(从而提供设备调用)，并且调用完删除这个全局方法。
let createTempFunc = (callbackFun, flag) => {
    let createTime = new Date().getTime();
    let tempFuncName = `deviceTempFunc_${createTime}`;
    window[tempFuncName] = (...args) => { // ...是es6运算符 接收不定个数的参数
        if(flag === 0){ // 刷银行卡或者身份证
            filterSuccCallback(callbackFun, args); // 过滤设备故障情况
        }else if(flag === 1){ // 拍照
            callbackFun();
        }else if(flag === 2 || flag === 3) { // 2弹出"设置交易密码的弹框";3弹出"审核码输入框"
            callbackFun(args);
        }
        delete window[tempFuncName];
    };
    return tempFuncName;
};

// 过滤设备故障情况
let filterSuccCallback = (callbackFun, args) =>{
    let flag = args[0], data = args[1], errorStr;
    if(flag === "1000" || flag === "2000") {
        callbackFun(data);
        return;
    }
    switch (flag) {
        case '0001':
            errorStr = '设备未连接'; break;
        case '6001':
            errorStr = '指纹错误'; break;
        case '1001':
            errorStr = 'IC卡错误'; break;
        case '2001':
            errorStr = '身份证错误'; break;
        case '3001':
            errorStr = '银行卡错误'; break;
        case '4001':
            errorStr = '获取密码错误'; break;
        case '8001':
            errorStr = 'arpc校验错误'; break;
        default:
            errorStr = "设备异常";
    }
    alert(errorStr);
};

let mockData = Env === 'dev'? MockData: '';

let device = {
    // 从设备获取业务ID
    getBusinessID() {
        if(Env === 'dev'){
            return MockData.bussiness[0].PrdId; // 从模拟数据中获取产品ID
        }
        try {
            return appBean.getBusinessID();
        }catch (e) {
            alert(e);
        }
    },
    // 取消呼叫
    stopAuth() {
        if(Env === 'dev'){
            return;
        }
        try {
            appHost.stopVTMService();
        } catch (e) {
            alert(e);
        }
    },
    // 给app传递业务流水号
    setBusinessJnlNo(JnlNo) {
        if(Env === 'dev'){
            return;
       }
        try{
           appBean.setBusninessNo(JnlNo);
       } catch (e){
           alert(e);
       }
    },
    // 给app传递业务ID
    setBusninessID(String) {
        if(Env === 'dev'){
            return;
        }
        try{
            appBean.setBusninessID(String);
        } catch (e){
            alert(e);
        }
    },
    // ios才有 弹出"审核码输入框"
    startAuthService(callbackFun) {
        if(Env === 'dev'){
            return;
        }
        try{
            appHost.startAuthService(createTempFunc(callbackFun, 3));
        } catch (e){
            alert(e);
        }
    },
    // 远程检查 呼叫视频连接
    longDistanceOpenAuth(callbackFun, UmId) {
        if(Env === 'dev'){
            setTimeout(function () {
                callbackFun("PH000");
            }, 2000);
            return;
        }
        try {
            appHost.SpecificAgentCall(createTempFunc(callbackFun), UmId);
        } catch (e) {
            alert(e);
        }
    },
    // 读取IC卡
    openIcCard(callbackFun) {
        Ui.loading(true, "正在读取卡信息");
        if (Env === 'dev') {
            setTimeout(function () {
                Ui.loading(false);
                callbackFun(mockData.TestData_yan);
            }, 1000);
            return;
        }

        try {
            setTimeout(function () {
                Ui.loading(false);
                appHost.readcardDes(createTempFunc(callbackFun, 0));
            }, 500);
        } catch (e) {
            alert(e);
        }
    },
    // 设置交易密码
    showPwdKeyboard(params, callbackFun){
        if (Env === 'dev') {
            callbackFun(["000000"]);
            return;
        }
        try {
            appHost.showCEPwd(params, createTempFunc(callbackFun, 2));
        } catch (e) {
            //  打开键盘失效
            alert("打开安全密码键盘失败，请重试");
        }
    },
    // 读取ID卡
    openIdCard(callbackFun, context) {
        Ui.loading(true, "正在读取身份证");
        if (Env === 'dev') {
            setTimeout(function () {
                Ui.loading(false);
                callbackFun(mockData.TestData_yan);
            }, 1000);
            return;
        }
        try {
            setTimeout(function () {
                Ui.loading(false);
                appHost.readIdCardDes(createTempFunc(callbackFun, 0));
            }, 500);
        } catch (e) {
            alert(e);
        }
    },
    // 密码加密
    requestCEPWD(timeStamp) {
        if(Env === 'dev'){
            return;
        }
        try {
            return appHost.requestCEPWD(timeStamp);
        }catch (e) {
            alert(e);
        }

    },
    // 设置跟踪流水号
    setTraceId: function(TraceId){
        if(Env === 'dev'){
            return;
        }
        try {
            appBean.setTraceId(TraceId);
        }catch (e) {
            alert(e);
        }
    },
    // 拍照
    openCameraEx: function (options) {
        if (Env === 'dev') {
            // return this.getCameraImg();
        }
        // 默认的错误回调
        let callbackError = ()=> {
            alert("default error");
        };
        let callbackErrorStr = "";
        if(options.callbackError) {
            callbackErrorStr = createTempFunc(options.callbackError, 1);
        }else {
            callbackErrorStr = createTempFunc(callbackError, 1);
        }
        let config = {
            'operJS': createTempFunc(options.callbackSucc, 1), // 成功回调
            'imageType': options.imageType, // 拍照类型
            'tophint': options.tophint, // 拍照界面上方提示文字
            'bottomHint': options.bottomHint, // 拍照界面下方提示文字
            'idnum': options.idnum || '', // 身份证号，可选，默认为空
            'errorOperJS': callbackErrorStr // 异常回调
        };
        try {
            appHost.takeCameraImage(JSON.stringify(config)); // 不同语言之间传值只能用字符串
        }catch (e) {
            alert(e);
        }
    },
    // 获取拍完照时的照片
    getCameraImg: function () {
        if (Env === 'dev') {
            return mockData.TestCameraPhotoBase64;
        }
        try {
            var base64img = appBean.getImgeBase64();
            try{
                appBean.setImgeBase64(null);// 没有传null 会报method not found的错误
            }catch(e) {
                alert(e);
            }
            return base64img;
        }catch (e) {
            alert(e);
        }
    },
    //获取登录用户信息
    getLogin: function () {
        if(Env === 'dev'){
            return mockData.TestTeller;
        }
        let getLogin = {};
        try {
            getLogin.userName = appBean.getLoginBean().getUserName();
            return getLogin;
        }catch (e) {
            alert('获取设备用户信息出错');
        }
    },
    //返回到app主页
    goHome: function () {
        if (Env === 'dev') {
            return;
        }
        try {
            appHost.finishActivity();
        }catch (e) {
            alert(e);
        }
    }
};

export default device;
