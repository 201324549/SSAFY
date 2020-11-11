<template>
    <div class="cards">
        <div class="card" @click="clickMenu">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120612_234%2Funimedia_1339459508366KgjsF_JPEG%2F%25C0%25BD%25BD%25C4%25BB%25E7%25C1%25F8-14.jpg&type=sc960_832" alt="">
            
            <div class="card_content">
                <p>
                  스테이크 정식
                </p>
            </div>
            <div class="price">
                19,000 원
            </div>

            <div class="darkness"></div>
            <div class="btn-plus"><span draggable="false">+</span></div>
          
        </div>
        
        <div class="card" @click="clickMenu">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjExMDJfMzYg%2FMDAxNDc4MDQ5NzI1ODk2.hINEIITOPVNf47bsGXxa9Suslo9mSCeQgGwjQFXTHd4g.x0azSyiUKZvwJobs3FFC5wiR_HrBqFuZU2OioDOu7zUg.JPEG.msinvestment%2FHKT_3913.jpg&type=sc960_832" alt="">
            <div class="card_content">
                <p>
                  낙지 볶음
                </p>
            </div>
            <div class="price">
                16,000 원
            </div>
              <div class="darkness"></div>
            <div class="btn-plus"><span draggable="false">+</span></div>
          
        </div>
        <div style="clear:both;"></div>
    </div>

</template>

<script>
export default {
    name : 'menuitem',

    methods: {
        clickMenu() {
            alert("메뉴 선택");
        }
    }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

    .card {
        float:left;
        width: 300px;
        height: 295.51px;
        font-family: 'Black Han Sans', sans-serif;
        border: 1px solid black;
        margin-right: 25px;
        position: relative;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
    }

    .card img {
        width:inherit;
        height:200.63px;
        display: block;
        box-shadow: 0 1px 10px rgba(0,0,0,0.4);
        border-bottom: 1px solid black;
    }

    .card p {
        border-bottom: 1px solid black;
        padding-bottom : 9px;
    }

    .price {
        padding-bottom : 9px;
    }

    .menucheck {
        position: relative;
        top: 30px;
        right : -130px;
        z-index: 1;
    }

    .darkness {
        position:absolute;
        top:0;
        left:0;
        width:inherit;
        height:inherit;
        opacity: 0;
        background-color:#000000;
        transition:all .6s linear;
    }

    .btn-plus {
        position:absolute;
        top:100px;
        left:125px;
        background:red;
        width:55px;
        height:55px;
        border-radius:50%;
        text-align:center;
        opacity:0;
        transform:scale(2);
        transition:all .3s linear;
    }

    .btn-plus span {
        font-size:43px;
        color:#ffffff;
        user-select:none;
    }

    .card:hover .darkness{
        opacity: 0.4;
    }

    .card:hover .btn-plus {
        opacity:1;
        transform:scale(1);
    }
    .card_content {
        padding-top:10px;
    }

    .card_content, .price{
        text-align:center;
        font-size: 20px;
    }

    .card_content p {
        margin-bottom: 7px;
    }

</style>

