<template>
    <div>
        <goodsList :data='bags'></goodsList>
    </div>
</template>

<script>
import goodsList from '@c/list.vue'
import {mapState,mapActions} from 'vuex'
    export default {
        components:{
            goodsList,
        },

        computed:{
            ...mapState('bag',['bags'])
        },

        methods:{
            ...mapActions('bag',['loadBags'])
        },

        mounted(){
            this.loadBags();
        }
    }
</script>

<style lang="stylus" scoped>

</style>