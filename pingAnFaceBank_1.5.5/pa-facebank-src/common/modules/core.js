// 添加实例方法
let core = {
    /**
     *  字符串加密
     *  银行卡号加密 6230 5824 7005 2888 888 => 623058******8888 (前6后4)
     *  姓名加密 陈艳美 => 陈*美 (前1后1)
     *  params:
     *    str 要加密的字符串
     *      front 头部不加密的位数
     *      rear 末尾不加密的位数
     */
    stringEncrypted(str, front, rear) {
        let _front = front === undefined ? 0 : front;
        let _rear = rear === undefined ? 0 : rear;
        let frontStr = str.substring(0, _front);
        let rearStr = str.substring(str.length - _rear);
        let centerStr = '';

        for (let i = 0; i < str.length - _front - _rear; i++) {
            centerStr += '*';
        }
        return frontStr + ' ' + centerStr + ' ' + rearStr;
    },
    /**
     * 金额大写转化
     * 1000 => 壹仟
     * @param dValue 输入金额
     * @param maxDec 最大输入金额
     */
    amountInWords: function(dValue, maxDec) {
        if (dValue == null || dValue == '') {
            return '';
        }
        // 验证输入金额数值或数值字符串：
        dValue = dValue.toString().replace(/,/g, '');
        dValue = dValue.replace(/^0+/, ''); // 金额数值转字符、移除逗号、移除前导零
        if (dValue == '') {
            return '零元整';
        } // （错误：金额为空！）
        else if (isNaN(dValue)) {
            return '错误：金额不是合法的数值！';
        }

        var minus = ''; // 负数的符号“-”的大写：“负”字。可自定义字符，如“（负）”。
        var CN_SYMBOL = ''; // 币种名称（如“人民币”，默认空）
        if (dValue.length > 1) {
            if (dValue.indexOf('-') == 0) {
                dValue = dValue.replace('-', '');
                minus = '负';
            } // 处理负数符号“-”
            if (dValue.indexOf('+') == 0) {
                dValue = dValue.replace('+', '');
            } // 处理前导正数符号“+”（无实际意义）
        }

        // 变量定义：
        var vInt = '';
        var vDec = ''; // 字符串：金额的整数部分、小数部分
        var resAIW; // 字符串：要输出的结果
        var parts; // 数组（整数部分.小数部分），length=1时则仅为整数。
        var digits, radices, bigRadices, decimals; // 数组：数字（0~9——零~玖）；基（十进制记数系统中每个数字位的基是10——拾,佰,仟）；大基（万,亿,兆,京,垓,杼,穰,沟,涧,正）；辅币（元以下，角/分/厘/毫/丝）。
        var zeroCount; // 零计数
        var i, p, d; // 循环因子；前一位数字；当前位数字。
        var quotient, modulus; // 整数部分计算用：商数、模数。

        // 金额数值转换为字符，分割整数部分和小数部分：整数、小数分开来搞（小数部分有可能四舍五入后对整数部分有进位）。
        var NoneDecLen = (typeof (maxDec) === 'undefined' || maxDec == null || Number(maxDec) < 0 || Number(maxDec) > 5); // 是否未指定有效小数位（true/false）
        parts = dValue.split('.'); // 数组赋值：（整数部分.小数部分），Array的length=1则仅为整数。
        if (parts.length > 1) {
            vInt = parts[0];
            vDec = parts[1]; // 变量赋值：金额的整数部分、小数部分

            if (NoneDecLen) {
                maxDec = vDec.length > 5 ? 5 : vDec.length;
            } // 未指定有效小数位参数值时，自动取实际小数位长但不超5。
            var rDec = Number('0.' + vDec);
            rDec *= Math.pow(10, maxDec);
            rDec = Math.round(Math.abs(rDec));
            rDec /= Math.pow(10, maxDec); // 小数四舍五入
            var aIntDec = rDec.toString().split('.');
            if (Number(aIntDec[0]) == 1) {
                vInt = (Number(vInt) + 1).toString();
            } // 小数部分四舍五入后有可能向整数部分的个位进位（值1）
            if (aIntDec.length > 1) {
                vDec = aIntDec[1];
            } else {
                vDec = '';
            }
        } else {
            vInt = dValue;
            vDec = '';
            if (NoneDecLen) {
                maxDec = 0;
            }
        }
        if (vInt.length > 44) {
            return '错误：金额值太大了！整数位长【' + vInt.length.toString() + '】超过了上限——44位/千正/10^43（注：1正=1万涧=1亿亿亿亿亿，10^40）！';
        }

        // 准备各字符数组 Prepare the characters corresponding to the digits:
        digits = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'); // 零~玖
        radices = new Array('', '拾', '佰', '仟'); // 拾,佰,仟
        bigRadices = new Array('', '万', '亿', '兆', '京', '垓', '杼', '穰', '沟', '涧', '正'); // 万,亿,兆,京,垓,杼,穰,沟,涧,正
        decimals = new Array('角', '分', '厘', '毫', '丝'); // 角/分/厘/毫/丝

        resAIW = ''; // 开始处理

        // 处理整数部分（如果有）
        if (Number(vInt) > 0) {
            zeroCount = 0;
            for (i = 0; i < vInt.length; i++) {
                p = vInt.length - i - 1;
                d = vInt.substr(i, 1);
                quotient = p / 4;
                modulus = p % 4;
                if (d == '0') {
                    zeroCount++;
                } else {
                    if (zeroCount > 0) {
                        resAIW += digits[0];
                    }
                    zeroCount = 0;
                    resAIW += digits[Number(d)] + radices[modulus];
                }
                if (modulus == 0 && zeroCount < 4) {
                    resAIW += bigRadices[quotient];
                }
            }
            resAIW += '元';

        }
        if (!vDec.replace(/0/g, '')) {

        } else {
            if (/[^0]0+\./g.test(dValue)) {
                resAIW += '零';
            } else if (/\.0+[^0]/g.test(dValue)) {
                resAIW += '零';
            }
        }
        // 处理小数部分（如果有）
        for (i = 0; i < vDec.length; i++) {
            d = vDec.substr(i, 1);
            if (d != '0') {
                resAIW += digits[Number(d)] + decimals[i];
            }
        }

        // 处理结果
        if (resAIW == '') {
            // resAIW = "零" + "元";
            resAIW = '零';
        } // 零元
        if (vDec == '') {
            resAIW += '整';
        } // ...元整
        resAIW = CN_SYMBOL + minus + resAIW; // 人民币/负......元角分/整
        return resAIW;
    },
    // 跳转到指定路由
    toPage(route) {
        let routeNameList = Store.state.routeNameList;
        let routeName = route.name; // 跳转后的路由名称
        if(!(routeNameList.indexOf(routeName)> -1)) {
            // 通过数组的值来记录进入页面的先后顺序,从而返回上一步时不会出错
            Store.state.routeNameList.push(routeName);
        }
        let preRouteName = routeNameList[routeNameList.length-2]; // 跳转前的路由名称

        // 右侧导航对应标题高亮显示
        let count = 0;
        let stepList = Store.state.navigator.stepList;
        stepList.map((item)=>{
            if(item.name === routeName){ // 当前导航标题变成"正在访问"
                item.isActive = true;
            }else {
                count++;
                item.isActive = false;
            }
        });
        // 像上传照片页面的路由是不存在于菜单中的,这种情况则不改变菜单的高亮显示
        if(count === stepList.length) {
            stepList.map((item)=>{
                if(item.name === preRouteName) item.isActive = true;
            })
        }

        Router.push(route);
    },
    // 返回上一步
    toBack() {
       let routeNameList = Store.state.routeNameList;
       Store.state.routeNameList.pop();
       let returnName = routeNameList[routeNameList.length-1];
       if (returnName) { // 返回上一步
           Core.toPage({name:returnName});
       } else { // 返回首页
           Device.goHome();
       }
    }
};

export default core;