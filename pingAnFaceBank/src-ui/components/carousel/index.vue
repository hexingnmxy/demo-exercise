<template>
    <section class="carousel-box">
        <slot></slot>
    </section>
</template>

<script>
    import './style.less';

    export default {
        data() {
            console.log(this.$children);
            return {
                index: 0
            };
        },
        mounted() {
            this.updateActive();
        },
        methods: {
            next() {
                const items     = this.$children;
                const active    = items[this.index];
                if( !items[0] ) {
                    return false;
                }

                const nextIndex = items[this.index + 1] ? this.index + 1 : 0;
                const nextItem  = items[nextIndex];

                active.middenToLeft();
                nextItem.rightToMidden();
                this.index      = nextIndex;
            },
            previous() {
                const items     = this.$children;
                const active    = items[this.index];
                if( !items[0] ) {
                    return false;
                }

                const nextIndex = this.index - 1 < 0 ? items.length - 1 : this.index - 1;
                const nextItem  = items[nextIndex];

                active.middenToRight();
                nextItem.leftToMidden();
                this.index      = nextIndex;
            },
            updateActive() {
                const items     = this.$children;
                for( let i = 0; items[i]; i++ ) {
                    if( items[i].active ) {
                        this.index  = i;
                        break;
                    }
                }

            }
        }
    };
</script>
