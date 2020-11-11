<template>
    <div>
        <div class="menufiveContainer">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140211_136%2Fjklovecos_1392092963990pnHG5_JPEG%2F%25B4%25EB%25C7%25D0%25B7%25CE%25B8%25C0%25C1%25FD_%25C6%25D2%25C4%25C9%25C0%25CC%25C5%25A9%25C0%25CC%25BE%25DF%25B1%25E2_%25BA%25EA%25B7%25B1%25C4%25A1_%25BA%25A3%25B8%25AE%25BA%25A3%25B8%25AE%25C6%25D2%25C4%25C9%25C0%25CC%25C5%25A9_%252822%2529.jpg&type=sc960_832" alt="">

            <div class="menufivename">
                <p>팬케이크</p>
            </div>
            <div class="fivecenterline"></div>
            <div class="menufiveprice">
                <p>8,500 원</p>         
            </div>
            <div style="clear: both;"></div>
            <div class="bright5"></div>
            <div class="btn-plus5"><span draggable="flasee">주문하기</span></div>
        </div>

        <div class="menufiveContainer">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160122_139%2Fnhgwedjsa_1453439798905h3BeA_JPEG%2F%25BC%25F6%25C7%25C3%25B7%25B9_%25C4%25A1%25C1%25EE%25C4%25C9%25C0%25CC%25C5%25A93.jpg&type=sc960_832" alt="">

            <div class="menufivename">
                <p>부드러운 수플레치즈케이크</p>
            </div>
            <div class="fivecenterline"></div>
            <div class="menufiveprice">
                <p>6,500 원</p>         
            </div>
            <div class="bright5"></div>
            <div class="btn-plus5"><span draggable="flasee">주문하기</span></div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@700&display=swap');

    .menufiveContainer {
        width: 450px;
        height: 210px;
        padding: 10px;
        font-family: 'Gaegu', cursive;
        border-radius: 10px;
        margin-right: 10px;
        float:left;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        position: relative;
    }

    .menufiveContainer img {
        float:left;
        width: 200px;
        height: 190px;
        border-radius: 10px;
    }

    .menufivename, .menufiveprice {
        float:right;
        font-size: 35px;
        width: 200px;
    }

    .menufivename p , .menufiveprice p {
        float: right;
        padding: 5px;
    }

    .menufivename {
        height: 67%;
    }

    .fivecenterline {
        float:right;
        height :3%;
        width : 200px;
        border-radius: 10px;
        background-color: black;
    }

    .menufiveprice {
        height: 30%;
    }
    
    .bright5 {
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

    .btn-plus5 {
        position: absolute;
        top:65px;
        left:135px;
        background-color: transparent;
        text-align:center;
        opacity:0;
        transform:scale(2);
        transition:all .3s linear;
    }

    .btn-plus5 span {
        font-size : 60px;
        user-select: none;
        color:white;
    }

    .menufiveContainer:hover .bright5 {
        opacity: 0.4;
    }

    .menufiveContainer:hover .btn-plus5 {
        opacity: 1;
        transform:scale(1);
    }
</style>