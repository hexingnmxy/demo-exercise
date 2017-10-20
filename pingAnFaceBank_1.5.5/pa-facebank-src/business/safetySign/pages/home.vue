<!-- 读取卡片 -->
<template>
    <div class="page">
       <pa-swipe-ic-card toPageRoute="IdentityVerify"></pa-swipe-ic-card>
    </div>
</template>

<script>
    import PaSwipeIcCard from '../../../components/page-swipe-ic-card-new/index';

    export default {
        components: {
            PaSwipeIcCard
        }
    }
</script>
