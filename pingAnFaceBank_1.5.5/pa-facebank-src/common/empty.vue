<!-- 空页面 -->
<template>
    <div></div>
</template>
<script>
    export default {
        mounted(){
            Store.state.PrdId = Device.getBusinessID(); // 从设备获取业务ID
            this.getTraceId(); // 获取跟踪流水号
        },
        methods: {
            /**
             * 获取跟踪流水号
             * @param  traceId : 获取跟踪流水号
             */
            getTraceId() {
                Ui.loading(true, "获取跟踪流水号");
                Axios.firstPost({
                    url: Api.getTraceId,
                    headers: { PrdId: Store.state.PrdId },
                    success: this.getTraceIdSuccess,
                    error: this.getTraceIdError
                });
            },
            /**
             * 获取跟踪流水成功回调处理
             * */
            getTraceIdSuccess(res) {
                if (res.TraceId) {
                    Store.state.TraceId = res.TraceId; // 保存跟踪流水号
                    Device.setTraceId(res.TraceId); // 传跟踪流水号给安卓和IOS
                    Core.toPage({name: 'Home'}); // 跳转到第一个业务页面
                } else {
                    this.$ui.popBox(true, {
                        text: "获取跟踪流水号失败，是否重新获取？",
                        popBoxButtons: [ // 普通弹框--按钮
                            {id: 'pop_box_cancel', text: '否'},
                            {
                                id: 'pop_box_ok',
                                text: '是',
                                callback: () => {
                                    this.getTraceId(); // 重新--获取跟踪流水号
                                }
                            }
                        ]
                    });
                }
            },
            /**
             * 获取跟踪流水失败回调处理
             * */
            getTraceIdError() {
                this.$ui.popBox(true, {
                    text: "获取跟踪流水号失败，是否重新获取？",
                    popBoxButtons: [ // 普通弹框--按钮
                        {id: 'pop_box_cancel', text: '否'},
                        {
                            id: 'pop_box_ok',
                            text: '是',
                            callback: this.getTraceId // 重新--获取跟踪流水号
                        }
                    ]
                });
            }
        }
    }
</script>
