<!-- 结果 --->
<template>
    <pa-result :resultStatus="resultStatus">{{resultText}}</pa-result>
</template>
<script>
    import PaResult from '../../../components/result';

    export default {
        data() {
            return{
                resultStatus: this.$route.params.resultStatus, // 结束状态
                resultText: this.$route.params.resultText, // 结束语
            }
        },
        components:{
            PaResult
        }
    }
</script>
