<template>
    <input type="checkbox" :class="switchBtn" :disabled="disable" :checked="checked" @click="switchClickFun"/>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
