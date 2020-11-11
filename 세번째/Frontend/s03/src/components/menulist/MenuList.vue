<template>
    
</template>

<script>
export default {
    props: ['menuarr'],
    data() {
        return {
            menumm :{},
        }
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
    .menulist {
        float:left;
        width: 300px;
        height: 295.51px;
        font-family: 'Black Han Sans', sans-serif;
        border: 1px solid black;
        margin-right: 25px;
        margin-top: 25px;
        position: relative;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
    }
    
    .menulist img {
        width:298px;
        height:200.63px;
        display:block;
        box-shadow: 0 1px 10px rgba(0,0,0,0.4);
        border-bottom: 1px solid black;
    }

    .menulist p {
        border-bottom: 1px solid black;
        padding-bottom: 9px;
    }

    .menulist .price {
        padding-bottom: 9px;
    }

    .darkness {
        position:absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        opacity: 0;
        background-color: #000000;
        transition:all .6s linear;
    }

    .btn-update{
        position:absolute;
        top: 115px;
        left: 70px;
        text-align:center;
        background-color: transparent;
        transform:scale(2);
        transition:all .3s linear;
        opacity:0;
    }

    .btn-update span{
        font-size:45px;
        color: white;
        user-select: none;
    }

    .menulist:hover .darkness {
        opacity: 0.4;
    }

    .menulist:hover .btn-update {
        opacity: 1;
        transform:scale(1);
    }
    .menu_content{
        padding-top:10px;
    }

    .menu_content, .price {
        text-align:center;
        font-size: 20px;
    }

    .menu_content p {
        margin-bottom: 7px;
    }









</style>