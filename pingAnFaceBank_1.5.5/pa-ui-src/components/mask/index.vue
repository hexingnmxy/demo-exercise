<template>
  <div :class="['ui-mask', {'ui-mask-none':disabled}]"
           :style="backgroundColor"></div>
</template>
<script>
    import './style.less';
    export default {
        computed: {
            backgroundColor() {
                let style = {};
                if(this.type === "black"){
                    style["background-color"] = 'rgba(0,0,0,0.5)';
                }else {
                    style["background-color"] = 'transparent';
                }
                return style;
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default() {
                    return false;
                }
            },
            type: {
                type: String,
                default() {
                    return 'black'; // black or transparent
                }
            }
        }
    };
</script>
