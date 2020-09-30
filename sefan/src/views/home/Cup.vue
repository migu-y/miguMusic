<template>
    <div class="contain_c">
        <goodsList :data='cups'></goodsList>
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
            ...mapState('cup',['cups'])
        },

        methods:{
            ...mapActions('cup',['loadCups'])
        },

        mounted(){
            this.loadCups();
            // console.log(this.cups);
        }
    }
</script>

<style lang="stylus" scoped>

</style>