<template>
    <div>
        <div class="menufourContainer">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140211_136%2Fjklovecos_1392092963990pnHG5_JPEG%2F%25B4%25EB%25C7%25D0%25B7%25CE%25B8%25C0%25C1%25FD_%25C6%25D2%25C4%25C9%25C0%25CC%25C5%25A9%25C0%25CC%25BE%25DF%25B1%25E2_%25BA%25EA%25B7%25B1%25C4%25A1_%25BA%25A3%25B8%25AE%25BA%25A3%25B8%25AE%25C6%25D2%25C4%25C9%25C0%25CC%25C5%25A9_%252822%2529.jpg&type=sc960_832" alt="">

            <div class="menufourname">
                <p>팬케이크</p>
            </div>
            <div class="fourcenterline"></div>
            <div class="menufourprice">
                <p>8,500 원</p>         
            </div>
            <div style="clear: both;"></div>
            <div class="bright4"></div>
            <div class="btn-plus4"><span draggable="flasee">주문하기</span></div>
        </div>

        <div class="menufourContainer">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160122_139%2Fnhgwedjsa_1453439798905h3BeA_JPEG%2F%25BC%25F6%25C7%25C3%25B7%25B9_%25C4%25A1%25C1%25EE%25C4%25C9%25C0%25CC%25C5%25A93.jpg&type=sc960_832" alt="">

            <div class="menufourname">
                <p>부드러운 수플레치즈케이크</p>
            </div>
            <div class="fourcenterline"></div>
            <div class="menufourprice">
                <p>6,500 원</p>         
            </div>
            <div class="bright4"></div>
            <div class="btn-plus4"><span draggable="flasee">주문하기</span></div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@700&display=swap');

    .menufourContainer {
        width: 450px;
        height: 210px;
        background-image: url('../../../src/assets/menuimage/flowerimg1.jpg');
        padding: 10px;
        font-family: 'Gaegu', cursive;
        border-radius: 10px;
        margin-right: 10px;
        float:left;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        position: relative;
    }

    .menufourContainer img {
        float:left;
        width: 200px;
        height: 190px;
        border-radius: 10px;
    }

    .menufourname, .menufourprice {
        float:right;
        font-size: 35px;
        width: 200px;
    }

    .menufourname p , .menufourprice p {
        float: right;
        padding: 5px;
    }

    .menufourname {
        height: 67%;
    }

    .fourcenterline {
        float:right;
        height :3%;
        width : 200px;
        border-radius: 10px;
        background-color: black;
    }

    .menufourprice {
        height: 30%;
    }
    
    .bright4 {
        position:absolute;
        top:0;
        left:0;
        width:inherit;
        height:inherit;
        opacity: 0;
        background-color: pink;
        transition:all .6s linear;
    }

    .btn-plus4 {
        position: absolute;
        top:65px;
        left:135px;
        background-color: transparent;
        text-align:center;
        opacity:0;
        transform:scale(2);
        transition:all .3s linear;
    }

    .btn-plus4 span {
        font-size : 60px;
        user-select: none;
    }

    .menufourContainer:hover .bright4 {
        opacity: 0.4;
    }

    .menufourContainer:hover .btn-plus4 {
        opacity: 1;
        transform:scale(1);
    }
</style>