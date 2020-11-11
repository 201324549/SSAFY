<template>
    <div id="menuInfoContainer">
        <MenuCreate :catelist="this.categoryList" v-if="MenuCreate" @close="closemodal(1)" @createmenu="createmenu()" ></MenuCreate>
        <MenuUpdate :menuinfo="this.upmenu" :catelist="this.categoryList" v-if="MenuUpdate" @close="closemodal(2)" @modifymenu="modifymenu()"  @menudelete="menudelete()"></MenuUpdate>
        <CateCreate v-if="CateCreate" @close="closemodal(3)" @cateinsert="catein()" ></CateCreate>
        <CateUpdate :cateinfo="this.upcate" v-if="CateUpdate" @close="closemodal(4)" @catemodify="cateup()" @catedelete="catedelete()" ></CateUpdate>
        <h1>카테고리 관리</h1>
        <hr>
        <div class="categorymanagement">
            <draggable v-model="categoryList" >
           <div class="catebox" @click="cateupdate(category)" v-for="category in categoryList" :key="category.categorySeq" >
                <p>{{category.categoryName}}</p>
                <div class="catedarkness"></div>
            <div class="catebtn-update"><span draggable="false">수정하기</span></div>
           </div>
           </draggable>
           <div class="cate-plus" @click="catecreate()">
               <p>추가</p>
               <div class="catedarkness-plus"></div>
                <div class="catebtn-plus"><span draggable="false">+</span></div>
           </div>
           <div style="clear:both;"></div>
            <button class="btn-style green" style="float:right;" @click="catesequpdate()">수정</button>
            <div style="clear:both;"></div>
        </div>
    
        <hr style="margin-bottom: 20px;">
        <br><br>
        <h1>메뉴 관리</h1>
        <hr>
        <div class="menumanagement">
            <div class="category8">
                <ul v-for ="category in categoryList" :key="category.categorySeq" class="tab_menu_container" >
                    <button :id="category.categorySeq" class="btn8" @click="clickmenu(category.categorySeq,category.menuCategoryNo)">
                    {{category.categoryName}}
                    </button>
                </ul>
            </div>
            <div style="clear:both;"></div>
            <div>
                <div>
    <draggable v-model="menuList" >
    <div class="menulist" v-for="(menu, index) in menuList" :key="menu.menuNo" @click="updateMenu(menu)" v-show="menu.menuCategoryNo == selectList" >
        <img :src="getImgUrl(index)" alt="">
        <div class="menu_content">
            <p>
                {{menu.menuName}}
            </p>
        </div>
        <div class="price">
            {{menu.menuPrice}} 원
        </div>
        <div class="darkness"></div>
        <div class="btn-update"><span draggable="false">수정하기</span></div>

    </div>
    </draggable>
    </div>
            </div>
            <div class="menu-plus" @click="addmenu()">
                <p>메뉴 추가</p>
                <div class="darkness-plus"></div>
                <div class="btn-plus"><span draggable="false">+</span></div>
            </div>
            <div style="clear:both;"></div>
        </div>
        <button class="btn-style green" style="float:right;" @click="menusequpdate()">수정</button>
        <div style="clear:both;"></div>
        <hr style="margin-top: 20px">
    </div>
</template>

<script>
import MenuCreate from '@/components/modal/MenuCreate.vue'
import MenuUpdate from '@/components/modal/MenuUpdate.vue'
import CateCreate from '@/components/modal/CateCreate.vue'
import CateUpdate from '@/components/modal/CateUpdate.vue'
import draggable from "vuedraggable";
import axios from 'axios'
import HTTP from "@/util/http-common.js"
export default {

    components:{
        MenuCreate,
        MenuUpdate,
        CateCreate,
        CateUpdate,
        draggable,
    },

    data() {
        return {
            enabled: true,
            MenuCreate: false,
            MenuUpdate : false,
            CateCreate : false,
            CateUpdate : false,
            categoryList :
            [
            ],

            selectList : 1,
            menuList :
            [
               
            ],
            seqList: [],
            displayList: [],
            upmenu: {},
            upcate: {},
        }
    },
    methods: {
        catesequpdate() {
            axios.put(`${HTTP.COMMON_URL}/common/menuCategory/changeSeq`, this.categoryList)
            .then( res =>{
                console.log(res)
                alert("카테고리 순서가 수정되었습니다.")
                location.reload()
            })
        },
        menusequpdate() {
            
            let cnt = 0;

            for(var i = 0; i < this.menuList.length; i++){
                if(this.menuList[i].menuCategoryNo == this.selectList){
                    this.seqList[cnt] = this.menuList[i]
                    cnt++;
                }
            }


            axios.put(`${HTTP.COMMON_URL}/common/menu/changeSeq`, this.seqList)
            .then(res => {
                console.log(res)
                alert("메뉴 순서가 수정되었습니다.")
                location.reload()
            })
        },
        clickmenu(num, no) {
            this.selectList = no;
            console.log(this.selectList)
            console.log(this.menuList, num)
            document.getElementById(num).style.color = "#03cf5d";
            document.getElementById(num).style.borderBottom = "2px solid #03cf5d";

            
            for(var i = 1; i <= this.categoryList.length; i++){
                if(num == i){
                    continue;
                }
                document.getElementById(i).style.color = "black";
                document.getElementById(i).style.border = "0px";
            }
        },
        updateMenu(menu){
            this.MenuCreate = false;
            this.CateCreate = false;
            this.CateUpdate = false;
            this.upmenu = menu;
            this.MenuUpdate = true;
        },
        addmenu(){
            this.MenuUpdate = false;
            this.CateCreate = false;
            this.CateUpdate = false;
            this.MenuCreate = true;
        },
        catecreate(){
            this.MenuCreate = false;
            this.MenuUpdate = false;
            this.CateUpdate = false;
            this.CateCreate = true;
        },
        cateupdate(cate){
            this.MenuCreate = false;
            this.MenuUpdate = false;
            this.CateCreate = false;
            this.upcate = cate;
            this.CateUpdate = true;
        },
        closemodal(num){
            if(num == 1){
                this.MenuCreate = !this.MenuCreate
            } else if(num == 2){
                this.MenuUpdate = !this.MenuUpdate
            } else if(num == 3){
                this.CateCreate = !this.CateCreate
                
            } else if(num == 4){
                this.CateUpdate = !this.CateUpdate
                
            }
        },
        catein() {
            alert('카테고리가 등록되었습니다.')
            this.CateCreate = !this.CateCreate
            location.reload()
        },
        cateup() {
            alert('카테고리가 수정되었습니다.')
            this.CateUpdate = !this.CateUpdate
            location.reload()
        },
        catedelete(){
            alert('카테고리가 삭제되었습니다.')
            this.CateUpdate = !this.CateUpdate
            location.reload()
        },
        menudelete(){
            alert('메뉴가 삭제되었습니다.')
            this.MenuUpdate = !this.MenuUpdate
            location.reload()
        },
        createmenu() {
            this.MenuCreate = !this.MenuCreate
            setTimeout(() => {
                location.reload()
            }, 1000);
        },
        modifymenu(){
            this.MenuUpdate = !this.MenuUpdate
            setTimeout(() => {
                location.reload()
            }, 1000);
        }
        ,
         getImgUrl(index){
            return `${HTTP.COMMON_URL}/common/${this.menuList[index].menuImg}`
        },
    },
    computed: {
       
    }
    ,
    mounted() {
        
    },
    watch: {
    },
    created() {
        console.log(this.$store.getters.getStoreData.storeNo)

        


        axios.get(`${HTTP.COMMON_URL}/common/menuCategory/byStoreNo`,
        {    
            params: {
                storeNo : this.$store.getters.getStoreData.storeNo
            }
        })
        .then(res =>{
            console.log(res)
            this.categoryList = res.data.data
            if(this.categoryList != null){
                setTimeout(() => {
                document.getElementById(1).style.color = "#03cf5d" ;
                document.getElementById(1).style.borderBottom = "2px solid #03cf5d";
                this.selectList = this.categoryList[0].menuCategoryNo
                }, 50);
            }
        })

        axios.get(`${HTTP.COMMON_URL}/common/menu/byStoreNo`,
            {
                params : {storeNo : this.$store.getters.getStoreData.storeNo}
            }
        )
        .then(res => {
            console.log('asdfasdfasfasdf' +res)
            console.log(res.data.data)
            this.menuList = res.data.data
            
        })

        

        
        let cnt = 0
        this.menuList.forEach(menu => {
           if ( menu.menuid === this.selectList) {
               console.log(menu)
               this.$set(this.displayList, cnt, menu)
               cnt ++
           }
        })
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap');

    .categorymanagement {
        padding-bottom: 30px;
    }

    .menumanagement{
        padding-bottom: 30px;
    }

    .catebox{
        float:left;
        width: 180px;
        text-align:center;
        font-family: 'Song Myung', serif;
        position: relative;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        height:80px;
        margin-right: 25px;
        margin-top : 25px;
    }
    
    .cate-plus {
        float:left;
        width: 180px;
        text-align:center;
        font-family: 'Black Han Sans', sans-serif;
        position: relative;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        height:80px;
        margin-right: 25px;
        margin-top : 25px;
    }

    .cate-plus p {
        font-size: 20px;
        position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    }

    .catebox p {
        font-size: 20px;
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

    #menuInfoContainer{
        padding : 50px;
    }

    .addbtn {
        border-radius : 50%;
        font-size : 25px;
    }

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

    .catedarkness {
        position:absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        opacity: 0;
        background-color: #000000;
        transition:all .6s linear;
    }

    .catebtn-update{
        position:absolute;
        top: 25px;
        left: 55px;
        text-align:center;
        background-color: transparent;
        transform:scale(2);
        transition:all .3s linear;
        opacity:0;
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

    .catebtn-update span{
        font-size:22px;
        color: white;
        user-select: none;
        font-family: 'Black Han Sans', sans-serif;
    }

    .menulist:hover .darkness {
        opacity: 0.4;
    }

    .menulist:hover .btn-update {
        opacity: 1;
        transform:scale(1);
    }

    .catebox:hover .catedarkness {
        opacity: 0.4;
    }

    .catebox:hover .catebtn-update {
        opacity: 1;
        transform:scale(1);
    }

    .catebox:active .catedarkness{
        opacity: 0;
    }

    .catebox:active .catebtn-update{
        opacity : 0;
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

    .menu-plus {
        float:left;
        width: 300px;
        height: 295.51px;
        font-family: 'Black Han Sans', sans-serif;
        border: 1px solid black;
        margin-right: 25px;
        position: relative;
        box-shadow: 0 1px 10px rgba(0,0,0,0.5);
        margin-top: 25px;
    }


    .darkness-plus {
        position:absolute;
        top:0;
        left:0;
        width:inherit;
        height:inherit;
        opacity: 0;
        background-color:#000000;
        transition:all .6s linear;
    }

    .btn-plus{
        position:absolute;
        top:115px;
        left:125px;
        background:white;
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
        color: black;
        user-select:none;
    }

    .catedarkness-plus {
        position:absolute;
        top:0;
        left:0;
        width:inherit;
        height:inherit;
        opacity: 0;
        background-color:#000000;
        transition:all .6s linear;
    }

    .catebtn-plus{
        position:absolute;
        top:12px;
        left:63px;
        background:white;
        width:55px;
        height:55px;
        border-radius:50%;
        text-align:center;
        opacity:0;
        transform:scale(2);
        transition:all .3s linear;
    }

    .catebtn-plus span {
        font-size:43px;
        color: black;
        user-select:none;
    }

    .menu-plus p {
        font-size: 40px;
        position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
        
    }

    .catebox p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .menu-plus:hover .darkness-plus {
        opacity:0.4;
    }

    .menu-plus:hover .btn-plus {
        opacity:1;
        transform:scale(1);
    }

    .cate-plus:hover .catedarkness-plus {
        opacity:0.4;
    }

    .cate-plus:hover .catebtn-plus {
        opacity:1;
        transform:scale(1);
    }

    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }


    .btn-style{
        text-decoration: none;
        font-size: 2rem;
        display : inline-block;
        border-radius: 12px;
        padding: 5px 15px 5px 15px;
        transition: all 0.5s;
        color: white;
        text-shadow: 0px -2px rgba(0,0,0,0.5);
        font-family: 'Black Han Sans', sans-serif;
        outline: 0;
        border: 0;
           
            
    }

    .btn-style.green{
        background-color: grey;
        border-bottom: 10px solid hsl(120, 18%, 90%);
    }
    .btn-style.green:active{
        border-bottom: 2px solid hsl(120, 18%, 90%);
    }
    .btn-style:active{
        transform : translateY(3px);
    }

</style>