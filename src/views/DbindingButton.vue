<template lang="">
    <div>
        <input type="text" v-model="textvalue" />
        <button type="button" v-bind:disabled="textvalue==''">Click</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            textvalue: ""
        }
    }
}
</script>
<style lang="">
    
</style>