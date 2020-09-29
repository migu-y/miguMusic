<template>
    <div>
        <goodsList :data='kes'></goodsList>
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
            // ...mapState('cup',{
            //     cups:state => state.cups
            // })
            ...mapState('phoneke',['kes'])
        },

        methods:{
            ...mapActions('phoneke',['loadKes'])
        },

        mounted(){
            this.loadKes();
            // console.log(this.cups);
        }
    }
</script>

<style lang="stylus" scoped>

</style>