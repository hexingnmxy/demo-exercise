<template>
    <div class="rate-wrap" :class="disabled">
        <a v-for="i in max"
           :class="[size]">
            <span
                :class="[i<=defaultActive?'is-active':'']"
                :data-index="i"
            >{{star}}</span>
        </a>
    </div>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
