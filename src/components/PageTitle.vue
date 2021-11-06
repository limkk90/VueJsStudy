<template>
    <h2>{{title}}</h2>
</template>
<script>

export default({
    // data() {
    //     return {
    //         title: 'aaa',
    //     }
    // },
    //P155
    // props: {
    //     title:{
    //         type: String,
    //         default: "페이지 제목입니다"
    //     }
    // }
    //P156
    data(){
        return{
            title: '동적 페이지 타이틀'
        };
    }
})
</script>
