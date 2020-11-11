<template>
    <div>
        <div class="menutwocontainer">
            <div class="imgdiv">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2Fdata17%2F2006%2F8%2F12%2F280%2F31-evol526.jpg&type=sc960_832" alt="">
            </div>
            <div class="menu"> <p>라면</p></div>
            <div style="clear: both;"></div>
            <div class="menubottom">
                <div class="leftbottom"><p>얼큰한 국물이 죽여줍니다.</p></div>
                <div class="rightbottom"> <p>5,000</p> </div>
            </div>
            <div class="darkness2"></div>
            <div class="btn-plus2"><span draggable="false">★</span></div>
        </div>

        <div class="menutwocontainer">
            <div class="imgdiv">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzEwMDZfMjEw%2FMDAxNTA3Mjc5OTUwMzg3.Hnlo1Emp8GvubKw_y2vYvQ2b9PSRqZZ3aIhHgEmJ1lIg.ZtJ6gDN_zuWUCD01of3S2J5mU4CAVYCMwzFewQ-PALEg.JPEG%2FIcHUDEZmXqhkjiq5AREFC5xTSWLo.jpg&type=sc960_832" alt="">
            </div>
            <div class="menu"> <p>우동</p></div>
            <div style="clear: both;"></div>
            <div class="menubottom">
                <div class="leftbottom"><p>오동통통 면발 맛나</p></div>
                <div class="rightbottom"> <p>6,000</p> </div>
            </div>
            <div class="darkness2"></div>
            <div class="btn-plus2"><span draggable="false">★</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'menutwo',

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Gugi&display=swap');

    .menutwocontainer {
        position: relative;
        width: 350px;
        height: 170px;
        background-color:white;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        font-family: 'Gugi', cursive;
        float:left;
        margin-right: 10px;
    }

    .imgdiv {
        width: 120px;
        height: 100px;
        margin: 10px 20px 10px 10px;
        float:left;
    }

    .menu {
        float:left;

    }

    .menu p {
        font-size: 30px;
        font-weight: bold;
        padding-top: 10px;
    }

    .imgdiv img {
        width:inherit;
        height: inherit;
    }

    .menubottom {
        width: 100%;
        height: 50px;
    }

    .leftbottom{
        width:65%;
        height: 100%;
        background-color: #EED311;
        float:left;
    }
    
    .leftbottom p{
        padding-top: 15px;
        padding-left: 5px;
    }
    .rightbottom p {
        padding-top: 20px;
    }

    .rightbottom{
        width:35%;
        height:100%;
        background-color: #EE7511;
        float:left;
        color: white;
        font-size:25px;
        text-align: center;
    }

    .rightbottom p {
        position: relative;
        font-weight: bold;
        top:-13px;
    }

    .btn-plus2 {
        position: absolute;
        opacity: 0;
        transform:scale(2);
        transition:all .3s linear;
        background-color: transparent;
        top:27px;
        left:130px;
    }

    .darkness2 {
        position:absolute;
        top:0;
        left:0;
        width:inherit;
        height:inherit;
        opacity: 0;
        background-color:#000000;
        transition:all .6s linear;
    }

    .menutwocontainer:hover .darkness2{
        opacity: 0.4;
    }

    .btn-plus2 span {
        user-select: none;
        font-size: 80px;
        color: yellow;
    }

    .menutwocontainer:hover .btn-plus2 {
        opacity:1;
        transform:scale(1);
    }
</style>