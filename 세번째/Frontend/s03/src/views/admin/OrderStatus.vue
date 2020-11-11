<template>
  <div>   <div id="orderstatuscontainer">

      <div class="tableitem1" v-for="table in tableList" :key="table.tableNo+table.tableName" >
            <div class="tablename1">
                {{table.tableName}}
            </div>
            <div class="innerorder">
            <div  v-for="tableorder in orderList" :key="tableorder.order.orderNo">
            
            <div  v-if="tableorder.order.tableNo == table.tableNo">
            <div :id="tableorder.order.orderNo+table.tableName" class="tableorder" @click="detailorder(tableorder.order.orderNo+table.tableName)">
                <div v-for="list in tableorder.menuList" :key="list.menu.menuName">
                <div v-if="tableorder.order.tableNo == table.tableNo">
                <p>{{list.menu.menuName}} X {{list.count }}</p>
                </div>
                <div class="darknessdiv1"></div>
                <div class="detailbtn">
                상세보기
                </div>
                </div>
            </div>
            </div>
            </div></div>  
        
            <button style="margin-top:10px; float:right; border: 0; outline: 0; background-color: transparent;">
                비우기
            </button>
              
      </div>
    <div style="clear:both;"></div>
        <div class="category8">
                <ul v-for ="category in clist" :key="category.categorySeq" class="tab_menu_container" >
                    <button :id="category.categorySeq" class="btn8" @click="clickmenu(category.categorySeq,category.menuCategoryNo)">
                    {{category.categoryName}}
                    </button>
                </ul>
            </div>
            <div style="clear:both;"></div>
        <div class="stockcontainer" style="margin-top: 20px;  text-align:center;" v-for="cate in clist" :key="cate.menuCategoryNo" >
            <div v-if="cate.menuCategoryNo == selectList">
            <Barchart v-if="flag" :labelinfo="labelinfo(cate)" style="height: 300px; width: 500px;" />
           </div>
        </div>
        </div>
        
  </div>
</template>

<script>

import Barchart from '@/components/chart/Barchart.vue'
import axios from "axios";
import HTTP from "@/util/http-common.js"
export default {
    components: {
        Barchart,
    },
    data() {
        return{
            mlist : [],
            clist : [],
            flag : false,
            tableList : [],
            orderList: [],
            selectList : 1,
        }
    },
    created() {

        
        var storeNo = this.$store.getters.getStoreData.storeNo

        

        axios.get(`${HTTP.COMMON_URL}/common/menuCategory/byStoreNo` ,
        {
            params: {storeNo : storeNo}
        })
        .then(res => {
            this.clist = res.data.data
            if(this.clist != null){
                setTimeout(() => {
                document.getElementById(1).style.color = "#03cf5d" ;
                document.getElementById(1).style.borderBottom = "2px solid #03cf5d";
                this.selectList = this.clist[0].menuCategoryNo
                }, 50);
            }
        })

        axios.get(`${HTTP.COMMON_URL}/common/menu/byStoreNo` ,
        {
            params: {storeNo : storeNo}
        })
        .then(res => {
            this.mlist = res.data.data
            
        })  

        axios.get(`${HTTP.COMMON_URL}/common/table/byStoreNo`, 
            {
                params : {storeNo : storeNo}

            }
        )
        .then( res => {
            this.tableList = res.data.data
        })

         setInterval(function(){
            axios.get(`${HTTP.ORDER_URL}/order/order/orderListByStoreNo`, {
            params : {storeNo : storeNo}
        }
        )
        .then(res => {
           this.orderList = res.data.data
        
        }
        )
        }.bind(this) ,3000)

        setTimeout(() => {
            this.flag = true;
        }, 1000);
        
    },
    mounted(){
    
    },
    methods: {
        closemodal(){
        },
        detailorder(orderNo){
            document.getElementById(orderNo).style.backgroundColor = "white";
        },
        labelinfo(cate){
            let temp = [];
            let cnt = 0;
            for(var i = 0; i < this.mlist.length; i++){
                if(this.mlist[i].menuCategoryNo == cate.menuCategoryNo){
                    let info = {menuName : "", stock : 0}
                    info.menuName = this.mlist[i].menuName;
                    info.stock = this.mlist[i].stock;
                    temp[cnt] = info;
                    cnt++;
                }
            }
            return temp;
        },
         clickmenu(num, no) {
            this.selectList = no;
            document.getElementById(num).style.color = "#03cf5d";
            document.getElementById(num).style.borderBottom = "2px solid #03cf5d";

            
            for(var i = 1; i <= this.clist.length; i++){
                if(num == i){
                    continue;
                }
                document.getElementById(i).style.color = "black";
                document.getElementById(i).style.border = "0px";
            }
        }
        
     },
     computed:{
         
     }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');    .di2{
        display: inline-block;
        
    }

    #orderstatuscontainer {
        position: absolute;
        top : 0;
        left : 0;
        padding : 100px;
        background-image: url("https://data.photo-ac.com/data/thumbnails/25/25472882c84cf463fd1f5145f97e1c5e_t.jpeg");
        background-repeat: no-repeat;
        border: 0;
        background-position: center;
        background-size: cover;
        min-width: 100%;
        min-height: 100%;
        height: 100vh;
        
    }

    .tableitem1 {
        position : relative;
        background-color: white;
        color:#2CAEEC;
        padding: 10px;
        margin: 10px;
        width: 200px;
        height: 230px;
        float:left;
        font-family: 'Nanum Gothic Coding', monospace;     
        box-shadow: 0 1px 5px  #2CAEEC;
    }

    .tableorder{
        position: relative;
        color:#2CAEEC;
        width: 100%;
        background-color: #fff48f;
    }

    .tableorder:hover .darknessdiv1{
        opacity: 0.4;
    }
    .tableorder:hover .detailbtn{
        opacity: 1;
    }


    .detailbtn{
        position: absolute;
        background-color: transparent;
        opacity: 0;
        /* transform: scale(2); */
        /* transition: all .3s linear; */
        color: red;
        user-select: none;
        top: 50%;
        left:50%; 
        transform:translate(-50%,-50%);
        font-size: 15px;
    }


    .tablename1 {
        font-size: 15px;
    }

    .darknessdiv1{
        position:absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: 100%;
        opacity: 0;
        background-color: black;
        transition:all .6s linear;
    }

    .innerorder {
        border : 1px solid hsl(0, 2%, 33%);
        padding : 3px;
        height: 160px;
        overflow: auto;
    }

    .category8 {
        font-family: 'Song Myung', serif;
        font-size : 20px;
        margin-top: 25px;
    }

    .category8 button {
        background-color :transparent;
        outline : 0;
        border : 0;
        float:left;
        margin-right: 15px;
    }
</style>