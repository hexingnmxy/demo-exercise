<template>
    <span :class="type"></span>
</template>
<style lang="less" scoped>
    @import '../../styles/ui/_icon.less';
</style>
<script>
    export default {
        data() {
            return {
                // type: `icon-${this.iconType}`
            };
        },
        props: {
            iconType: {
                type: String,
                default() {
                    return '';
                }
            },
            iconClass: {
                type: String,
                default() {
                    return '';
                }
            }
        },
        computed: {
            type() {
                return `icon-${this.iconType} ${this.iconClass}`;
            }
        }
    };
</script>
