<!-- 身份验证 -->
<template>
    <div class="page">
        <pa-swipe-id-card :toPageRoute="toPageRoute" :isToUploadPhotos="true"></pa-swipe-id-card>
    </div>
</template>

<script>
    import PaSwipeIdCard from '../../../components/page-swipe-id-card-new';

    export default {
        data(){
            return{
                toPageRoute: 'ContractSet' // 上传完照片(或者身份证审核)之后的跳转页面
            }
        },
        components: {
            PaSwipeIdCard
        }
    }
</script>
