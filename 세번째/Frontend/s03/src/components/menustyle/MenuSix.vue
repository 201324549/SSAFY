<template>
    <div>
        <div class="menusixContainer">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEyMDRfMjg1%2FMDAxNDgwODI1MjgyMDMx.KQDrKztUUikLz3SvxyNZFe3KZ4xQzRsRf5diR6gzersg.hYs1eXvj6cW36k9O-nHDa1bKK8hENq1GqvI1pqChvCAg.JPEG.msexys%2FIMG_4629.JPG&type=sc960_832" alt="">

            <div class="menusixname">
                <p>참치 뱃살</p>
            </div>
            <div class="sixcenterline"></div>
            <div class="menusixprice">
                <p>40,000 원</p>        
            </div>
            <div style="clear: both;"></div>
            <div class="bright6"></div>
            <div class="btn-plus6"><div class="icondiv"><i class="fas fa-utensils"></i></div></div>
        </div>

        <div class="menusixContainer">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA4MzFfMTcw%2FMDAxNTk4ODYyNDg2Njc1.7QZ9abTsFAyp5FJPTC0xamvynCmJhT6b9-QgJAgQIzQg.3Dk_fkUY5BUB-C2N_j6wUJz7a7mKynfL0F6HCXyPmc0g.JPEG%2FKakaoTalk_20200831_120939917_03.jpg&type=sc960_832" alt="">

            <div class="menusixname">
                <p>우럭 회</p>
            </div>
            <div class="sixcenterline"></div>
            <div class="menusixprice">
                <p>20,000 원</p>         
            </div>
            <div class="bright6"></div>
            <div class="btn-plus6"><div class="icondiv"><i class="fas fa-utensils"></i></div></div>
        </div>

    </div>
</template>

<script>


export default {
    
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');
    .menusixContainer {
        width: 450px;
        height: 210px;
        padding: 10px;
        background-image: url('../../../src/assets/menuimage/japanstyle.jpg');
        font-family: 'East Sea Dokdo', cursive;
        border-radius: 10px;
        margin-right: 10px;
        float:left;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        position: relative;
        filter:alpha(opacity=20);
    }

    .menusixContainer::after{
        opacity:0.5 !important;
    }

    .menusixContainer img {
        float:left;
        width: 200px;
        height: 190px;
        border-radius: 10px;
    }

    .menusixname, .menusixprice {
        float:right;
        font-size: 35px;
        width: 200px;
    }

    .menusixname p , .menusixprice p {
        float: right;
        padding: 0 5px 5px 5px;
    }

    .menusixname {
        height: 69%;
    }

    .sixcenterline {
        float:right;
        height :1%;
        width : 200px;
        border-radius: 10px;
        background-color: black;
    }

    .menusixprice {
        height: 30%;
    }
    
    .bright6 {
        position:absolute;
        top:0;
        left:0;
        width:inherit;
        height:inherit;
        opacity: 0;
        background-color: black;
        transition:all .6s linear;
        border-radius: 10px;
    }

    .btn-plus6 {
        position: absolute;
        top:50px;
        left:180px;
        background-color: transparent;
        text-align:center;
        opacity:0;
        transform:scale(2);
        transition:all .3s linear;
        font-size : 100px;
    }

    .btn-plus6 .icondiv{
        font-size : 100px;
        user-select: none;
        color: white;
    }

    .menusixContainer:hover .bright6 {
        opacity: 0.4;
    }

    .menusixContainer:hover .btn-plus6{
        opacity: 1;
        transform:scale(1);
    }
</style>