<template lang="">
    <child-component3 @send-message="sendMessage" ref="child_component3" />
    <button type="button" @click="changeChildData">Change ChildData</button>
</template>
<script>
import ChildComponent3 from './ChildComponent3';
export default {
    components: {ChildComponent3},
    methods: {
        changeChildData(){
            this.$refs.child_component3.msg="부모 컴포넌트가 변경한 데이터";
        }
    }
}
</script>
<style lang="">
    
</style>