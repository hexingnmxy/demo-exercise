// import store from './store';

// let Ui = {};

// 添加实例方法
let Ui = {
    loading(isShow, text){
        if(isShow){ // 显示loading框
            if(text){
                Store.state.loadingPopText = text; // loading弹框--文字
            }
            Store.state.loadingPopDisabled = false;
        }else { // 隐藏loading框
            Store.state.loadingPopDisabled = true;
        }
    },
    popBox(isShow, options){
        if(isShow){ // 显示对话框
            if(!options){
                // let options = {
                //     text: context.$store.state.popBoxText,
                //     popBoxButtons: [ // 普通弹框--按钮
                //         {id: 'pop_box_ok', text: '确认'}
                //     ],
                //     popBoxDisabled: true, // 普通弹框--状态
                //     popBoxText: 'ok', // 普通弹框--文字
                //     popBoxIcon: '' // 普通弹框--图标
                // };
                // store.state.popBoxText = options.text; // 普通弹框--文字
            }else {
                store.state.popBoxDisabled = false;
                store.state.popBoxText = options.text; // 普通弹框--文字
                if(options.popBoxButtons){
                    store.state.popBoxButtons = options.popBoxButtons; // 普通弹框--文字
                }
            }
        }else { // 隐藏对话框
            store.state.popBoxDisabled = true;
        }
    }
};

export default Ui;
