<template lang="">
    <div>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
            <option value="065">제주1</option>
        </select>
    </div>
</template>
<script>
export default {
    data(){
        return{
            city: "064"
        };
    }
}
</script>
<style lang="">
    
</style>