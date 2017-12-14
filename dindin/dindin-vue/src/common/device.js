//调用原生方法
const device = {
	nativeAlert:function(message, alertCB, title, buttonCapture){
		// H5 plus事件处理
		function plusReady(){
			plus.nativeUI.alert(message, alertCB, title, buttonCapture);
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener("plusready",plusReady,false);
		}
	},
	setStyle:function(obj){
		// H5 plus事件处理
		function plusReady(){
			plus.webview.currentWebview().setStyle(obj);
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener("plusready",plusReady,false);
		}
	},
	getCamera:function(){
		return new Promise ((resolve, reject) =>{
			// H5 plus事件处理
		function plusReady(){
			var cmr = plus.camera.getCamera();
			cmr.captureImage(function(p){
				plus.io.resolveLocalFileSystemURL(p, function(entry){
					//读取文件成功
				const obj = {code:'0001',res:entry};
				resolve(obj)
				}, function(e){
					//读取拍照文件错误
					//{code:'0001',res:entry};
					const obj = {code:'0002',res:e.message};
					resolve(obj)
				});
			}, function(e){
				const obj = {code:'0003',res:e.message};
				resolve(obj)
			}, {filename:'_doc/camera/',index:1});
		}
		if(window.plus){
			plusReady();
		}else{
			document.addEventListener("plusready",plusReady,false);
		}
		})
		
	}
};


export default device;
