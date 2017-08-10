<template>
    <button
        :disabled='btnDisabled'
        :class="[type, size, display]"
    >
        <span class="icon" :class="btnIcon"></span><slot></slot>
    </button>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
