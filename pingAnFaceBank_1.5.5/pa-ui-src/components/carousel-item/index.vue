<template>
    <transition :name="transitionName">
        <div class="carousel-item" v-show="show">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import './style.less';

    export default {
        data() {
            return {
                transitionName: 'carousel-next',
                show : this.active
            };
        },
        props: {
            active: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        methods: {
            middenToRight() {
                this.transitionName = 'carousel-previous';
                this.show = false;
            },
            rightToMidden() {
                this.transitionName = 'carousel-next';
                this.show = true;
            },
            middenToLeft() {
                this.transitionName = 'carousel-next';
                this.show = false;
            },
            leftToMidden() {
                this.transitionName = 'carousel-previous';
                this.show = true;
            }
        }
    };
</script>
