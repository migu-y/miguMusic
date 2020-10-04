<template>
    <div>
        <goodsList :data='others'></goodsList>
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
            ...mapState('others',['others'])
        },

        methods:{
            ...mapActions('others',['loadOthers'])
        },

        mounted(){
            this.loadOthers();
            // console.log(this.cups);
        }
    }
</script>

<style lang="stylus" scoped>

</style>