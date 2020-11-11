<template>
  <div>
      <div class="head" style="display: flex">
          <button class="left" @click="MenuOn()"><h1 class="categoty">메뉴</h1> </button>
          <button class="right" @click="ReviewOn()"><h1 class="categoty">리뷰</h1></button>
      </div>

    <div v-if="this.menu_on == true">
        <div v-for="menu in menuList" :key="menu.menuid">
            
            <h1 class="categoty">{{ menu.menuCategory.categoryName }}</h1>
                <hr>
                <div v-for="menudetail in menu.jmolist" :key="menudetail.menuid">
                    <div class="menufiveContainer" @click="buyProduct(menudetail.menu)">
                        <img src="menudetail.menu.menuImg" alt="">

                            <div class="menufivename">
                                <p>{{ menudetail.menu.menuName }}</p>
                            </div>
                    <div class="fivecenterline"></div>
                <div class="menufiveprice">
                    <p>{{ menudetail.menu.menuPrice }}원</p>         
                </div>
                    
              
                    </div>
                    </div>
                </div>
      </div>

    <div v-if="this.review_on == true">
    <!-- 리뷰쓰기 -->
    <div id="revcontainer">
        <div id="revtitle" >리뷰</div>
        <hr id="hr1">
        <div id="content" >
      
        <label id="lab" for="" >내평점</label> <button id="togglebtn" @click="changetoggle">{{ name }}</button>
        </div>
        <div id="incontainer" v-if="toggle==true" class="fi" >
        <StarRating class="starR" style="float:left;" v-model="revitem.rate"  :star-size="25" v-bind:max-rating="10" :show-rating="temp"/> 
        <button @click="zerorating" style="float:left; background-color: transparent; border:0; margin-left: 5px; margin-top:5px;">0점</button>
        <textarea id="revcontent" v-model="revitem.content"></textarea>
        <button v-if="this.revcheck == true" class="revbutton" @click="updaterev" >수정</button>
        <button v-else class="revbutton" @click="writerev">작성</button>
       
        </div>
    </div>
    <!-- 리뷰쓰기 끝 -->
    <!-- 리뷰리스트 -->
    <div id ="revListcontainer">
        
        <vue-confirm-dialog></vue-confirm-dialog>
        <div id="app" style="margin-top:7vh;">
            <div style="width:100%;">
                <div style="width:100%;">
                    <h1 style=" padding:2vw; font-size:3vw;">리뷰</h1>
                </div>
    
            </div> 
      </div>
        <div id ="positiveRev"> 
            <div class = "revitem" v-for="review in paginatedData" :key="review.writer" >
                <div class="firstLine">
                <div class ="revName">
                    {{ review.writer }} 
                </div>    
                    <i id="staricon" class="fas fa-star" style="color:yellow; float:left; "></i>&nbsp;<p style="font-size:1.5vw; float:left;"> {{ review.rate }} / 10 </p>
                
                </div>
                <br>
                <div class="revContent">
                    {{ review.content }}
                </div>
                <br>
                <div class="revDate">
                    {{ review.regtime }} <button v-if="userno == review.userNo" @click="delrev" style="color: black; background-color: #fff9f7; -webkit-transition-duration: 0.4s; margin-left: 1vw; transition-duration: 0.4s; border: 0; outline: 0;">삭제하기</button>
                </div>
            </div>
            <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <button  :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        다음
      </button>
    </div>


        </div>
        
    
        <div id="checkdiv">

        </div>
    </div>
    <!-- 리뷰리스트 끝 -->
    </div>
        <div style="height: 200px">.</div>
      <div class="footer" @click="gotoOrderList">
          <h1 class="intro">장바구니</h1>
      </div>

      <hr><hr><hr><hr><hr>
      

  </div>
</template>

 

<script>
import axios from 'axios'
import StarRating from 'vue-star-rating';
import HTTP from "@/util/http-common.js"
export default {
    name: 'ReviewWrite',
    components: {
        StarRating,
    },
    data() {
        return{
            cart: [
				{
				id: 4,
				quantity: 1
				},
				{
				id: 1,
				quantity: 3
				},
				{
				id: 2,
				quantity: 3
				},
				{
				id: 3,
				quantity: 1
				},
				{
				id: 7,
				quantity: 2
				}
		],
            menuList: [],
            orderList: [],     
            total_price: 0,
            menu_on : true,
            review_on : false,
            revwrite: null,
            temp:false,
            toggle: false,
            name: "펼치기",
            onlogin:false,
            revcheck: false,
            movieId: this.movieNo,
            revitem: {
                userNo: 9999,
                writer: "",
                content: "",
                rate: 0,
                movieId: this.movieNo,
            },
            // 리뷰리스트
            booleanValue: false,
            paddingNum: 5,
            F: false,
            userno: 0,
        
            pageNum: 0,
            pageSize: 5,
            pageNum1: 0,
            pageSize1: 5,
            positiveList: [],
        }
    },
    created() {
        axios.get(`${HTTP.COMMON_URL}/common/Join/menuBoard`,
            {
                params: {storeNo: 2 }
            }
        ).then(res => {
                this.menuList = res.data.data;
                console.log(this.menuList)
            })
    },
    computed: {
        

    pageCount () {
      let listLeng = this.positiveList.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    pageCount1 () {
      let listLeng = this.negativeList.length,
          listSize = this.pageSize1,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.positiveList.slice(start, end);
    },
    paginatedData1 () {
      const start = this.pageNum1 * this.pageSize1,
            end = start + this.pageSize1;
      return this.negativeList.slice(start, end);
    },
    },
    methods: {
        gotoOrderList(){
        console.log('여기')
        console.log(this.orderList)
        var storage = localStorage;
        storage.setItem("orderList", this.orderList)
        this.$router.push({name: "OrderList"})

        },
        buyProduct(menu){
            console.log(this.orderList.length)
           
            this.orderList.push([menu.menuNo,menu.menuName,menu.menuPrice,menu.menuSeq])
            let count = 0;
            console.log(this.orderList)
            for(var i=0; i < this.orderList.length; i++){
                if(this.orderList[i][0] == menu.menuNo){
                    count = count + 1;
                }
                if(count == 2){
                    alert('이미 장바구니에 담겼습니다.')
                        this.orderList.pop();
                }
            }               
            
           
        },
        decrement(id){
			this.cart.forEach((item, i) => {
				if (item.id === id) {
			this.cart[i].quantity -= 1;
			}
			})
		},
		increment(id) {
		this.cart.forEach((item, i) => {
			if (item.id === id) {
			this.cart[i].quantity += 1;
			}
		});
    },
        MenuOn() {
            this.menu_on = true;
            this.review_on = false;
        },
        ReviewOn() {
            this.review_on = true;
            this.menu_on = false;
        },
        changetoggle() {
            this.toggle = !this.toggle;
            if(this.name == "펼치기"){
                this.name = "접기";
            } else {
                this.name = "펼치기";
            }
        },
        writerev() {
            axios.post(`${URL.BASE_URL}/mcr/daumreview/`, this.revitem)
            .then(res => {
                console.log(res)
                alert("리뷰 작성 완료")
                location.reload()
            })
        },
        zerorating() {
            this.revitem.rate = 0;
        },
        nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    },
    nextPage1 () {
      this.pageNum1 += 1;
    },
    prevPage1 () {
      this.pageNum1 -= 1;
    },
    delrev() {
        this.handleClick()
    },
    handleClick(){
        this.$confirm({
            message: `리뷰를 삭제하시겠습니까?`,
            button: {
                no: '아니요',
                yes: '삭제'
            },
            callback: confirm => {
             
                if(confirm){
                    axios.delete(`${HTTP.BASE_URL}/mcr/daumreview/`,
                    {
                        params: {movieId: this.movieId , userNo: this.userno}
                    })
                
                    alert("삭제 되었습니다.")
                    setTimeout(() => {
                        this.$router.go()
                        this.$router.push({name: "FeedDetail", params: {movieId: this.movieId }})
                    }, 1000);
                }
            }
        })
    }

    }
}
</script>

<style>

.categoty { font-weight: bold; margin: 10px;}
.head {display:table; width:100%; height:80px; background-color: black;}
.intro {display:table-cell; text-align:center; vertical-align:middle; color:white; font-family:'Times New Roman', Times, serif;}
.footer { display:table; position: fixed; height: 100px; bottom: 0; width: 100%; background-color: black;}
.menu { height: 100px; background-image: url('https://t1.daumcdn.net/brunch/service/user/LLa/file/DYX8mhYncbAE5pJq9uLK6Is_IdE.jpg?download');}
.left {
    width: 50%;
    
    background-image: url(assets/menu.png);
}
.right {
    width: 50%;
}
#content{
        padding-bottom: 2.5vh;
    }
    #line1{
        height : 4.5vh;
    }
    #lab{
        float: left;
        margin-left:3vw;
    }
    #togglebtn{
        color: black;
        background-color: #fff9f7;
        float: right;
        margin-right : 2vw;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        border: 0;
        outline: 0;
        
    }
    #togglebtn:hover{
        color: red;
    }
    #incontainer{
        border: 2px solid skyblue;
        margin : 2vh 2vw 2vh 2vw; 
        padding : 3vh 3vw 3vh 1.5vw;
        
    }
    #revcontainer{
        background-color : #fff9f7;
        font-family: 'Hanna', sans-serif;
    }
    #revcontent {
            width: 85%;
            height: 16vh;
            resize: none;
            margin-top : 4vh;
            border : 2px solid skyblue;
            margin-left: 2vw;
            margin-right: 2vw;
            margin-bottom: 2vh;
    }
    #revwrite {
        margin-left: 2.5vw;
        margin-right: 2.5vw; 
    }
    #revtitle {
        font-size: 5vw;
        margin-left: 2vw;
        padding-top: 1vh;
        color: black;
    }
    .revbutton{
        margin-top : 15vh;
        margin-left: 1vw;
        margin-right: 2vw;
        font-size: 1.5vw ;
        position: absolute;
        background-color:#fff9f7;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        border: 0;
        outline: 0;
    }

    #lab{
        color: black;
    }

    #hr1{
        background-color: skyblue;
    }
    @import url(//fonts.googleapis.com/earlyaccess/hanna.css);
    #revListcontainer{
        background-color:#fff9f7;
        font-family: 'Hanna', sans-serif;
    }

    #positiveRev{
        float: left;
        width : 48%;
    }

    #negativeRev{
        float: right;
        width: 48%;
    }

    .revName{
        font-size: 1.5vw;
        float: left;
    }

    .revitem{
        border-bottom: 1px solid skyblue;
        margin-top: 2vh;
        padding: 2vw;
    }

    .revDate{
        font-size : 1.5vw;
    }   

    

    #checkdiv{
        clear: both;
        border-bottom: 1px solid white;
        padding: 10px;
    }

    .btn-cover {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 2vw;
  
}
.btn-cover .page-btn {
  width: 8vw;
  height: 5vh;
  font-size: 1.5vw;
  letter-spacing: 0.5px;
  border-radius: 8px;
  color: skyblue;
  background-color: rgba(0,0,0,0);
  border: 1px solid skyblue;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
.revContent{
    line-height: 1.2;
    height: 3.6em;
    width:95%;
    display: inline-block;
    overflow-y:auto;
    padding-right:1vw;
    font-size: 1.2vw;
    word-break:break-all;
}
.wordDiv{
    width:45%;
    height: 50vh;
}

.revContent::-webkit-scrollbar {
    width: 10px;
  }
  .revContent::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  .revContent::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

#staricon {
    margin-right:10px; margin-left:10px; margin-top:5px;
}

#staricon1{
    margin-right:10px; margin-left:10px; margin-top:5px;
}

@media screen and (max-width: 405px) {
    .btn-cover .page-btn{
        width: 9vw;
        height: 3vh;
        font-size: 1vw;
    }



}

@media screen and (max-width: 1100px) {
    #staricon {
        margin-top:3px !important;
    }

    #staricon1 {
        margin-top:3px !important;
    }
}

@media screen and (max-width: 950px) {
    #staricon {
        margin-top:2px !important;
    }

    #staricon1 {
        margin-top:2px !important;
    }
}

@media screen and (max-width: 880px) {
    #staricon {
        margin-top:1px !important;
    }

    #staricon1 {
        margin-top:1px !important;
    }
}

@media screen and (max-width: 750px) {
    #staricon {
        margin-top:0px !important;
    }

    #staricon1 {
        margin-top:0px !important;
    }
}
 @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@700&display=swap');

    .menufiveContainer {
        width: 350px;
        height: 150px;
        padding: 10px;
        margin-bottom: 30px;
        font-family: 'Gaegu', cursive;
        border-radius: 10px;
        margin-right: 10px;
        float:left;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        position: relative;
    }

    .menufiveContainer img {
        float:left;
        width: 130px;
        height: 130px;
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
        width : 60%;
        border-radius: 10px;
        background-color: black;
    }

    .menufiveprice {
        height: 30%;
    }
    
  

    .btn-plus5 {
        position: absolute;
        top:25px;
        left:45px;
        background-color: transparent;
        text-align:center;
        opacity:0;
        transform:scale(2);
        transition:all .3s linear;
    }

   

    .menufiveContainer:hover .bright5 {
        opacity: 0.4;
    }

    .menufiveContainer:hover .btn-plus5 {
        opacity: 1;
        transform:scale(1);
    }
    
</style>