/**
 * Created by hexing on 2017/7/5.
 */
var _ = require('underscore');
var _mm = {
    request : function(param){
        var _this = this;
        $.ajax({
            type:param.method || 'get',
            url : param.url || '',
            dataType:param.type || 'json',
            data : param.data || '',
            success : function(res){
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res);
                }else if(res.status ===10){
                    _this.doLogin();
                }else if(res.status ===1){
                    typeof param.error === 'function' && param.error(res.message);
                }
            },
            error : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }
        })
    },
    // 获取服务器地址
    getServerUrl : function(path){
        return conf.serverHost + path;
    },
    // 获取url参数
    getUrlParam : function(name){
        var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result  = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    // 成功提示
    successTips : function(msg){
        alert(msg || '操作成功！');
    },
    // 错误提示
    errorTips : function(msg){
        alert(msg || '哪里不对了~');
    },
    // 字段的验证，支持非空、手机、邮箱的判断
    validate : function(value, type){
        var value = $.trim(value);
        // 非空验证
        if('require' === type){
            return !!value;
        }
        // 手机号验证
        if('phone' === type){
            return /^1\d{10}$/.test(value);
        }
        // 邮箱格式验证
        if('email' === type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        }
    },
    renderHtml:function(htmlTpl,data){
        var compiled = _.template(htmlTpl);
        var html = compiled(data);
        return html;
    },
    doLogin :function(){
        window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
    }
};

var conf ={
    serverHost:''
}

module.exports = _mm;