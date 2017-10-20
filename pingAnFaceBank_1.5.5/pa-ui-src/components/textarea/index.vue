<template>
    <div class="textarea-wrap" :class="isFocus?'textarea-focus':''">
        <textarea
            :disabled='disabled'
            :rows="rows"
            :placeholder="placeholder"
            :maxLength="max"
            v-model="valueModel"
            @focus="onFocus"
            @blur="onBlur"
            @keydown="onKeyDown"
        >
        </textarea>
        <div v-show="showCounter&&max" class="textarea-counter">
            <span>{{count}}</span>/{{max}}
        </div>
    </div>
</template>
<script>
    import './style';
    import main from './main';
    export default main;
</script>
