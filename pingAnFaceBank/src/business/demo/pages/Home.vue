<template>
    <div>
       {{msg}}
        <pa-button btn-size="min" btn-type="rectangle-empty-theme">Download</pa-button>
    </div>
</template>
<script>
    import PaButton from 'pingan-ui/components/button'
    export default {
        data () {
            return {
                msg: 'Welcome'
            }
        },
        components: {
            PaButton
        }
    }
</script>
