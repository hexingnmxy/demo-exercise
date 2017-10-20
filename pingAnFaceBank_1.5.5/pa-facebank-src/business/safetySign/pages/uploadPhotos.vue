<!-- 上传身份证和其他材料照片 --->
<template>
    <div class="page-simple-container-column">
        <pa-page-upload-photos :toPageRoute="toPageRoute"></pa-page-upload-photos>
    </div>
</template>
<script>
    import PaPageUploadPhotos from '../../../components/page-upload-photos/index';
    
    export default {
        data(){
            return {
//                toPageRoute: Router.params.toPageRoute
                toPageRoute: 'ContractSet'
            }
        },
        components:{
            PaPageUploadPhotos
        }
    }
</script>
