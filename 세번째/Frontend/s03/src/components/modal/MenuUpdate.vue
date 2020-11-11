<template>
<transition name ="modal">
    <div id="menuupdateModal">
    <div id="menuupdateContainer">
        
        <div class="menuform">
            <button type="button" class="close" data-dismiss="modal" @click="modalclose">×</button>
        <p class="updatetitle">
            메뉴 수정
        </p>
        
        <hr style="background-color: black;">
        <br>
        <form action="">

            <div class="menuname">
                <label for="">이름 : </label> <input type="text" v-model="upmenu.menuName" style="margin-right: 10px;">
                <select name="category" id="categoryselect" style="padding:5px;" v-model="upmenu.menuCategoryNo">
                    <!-- <option v-if="menuinfo.categoryid"  v-text="menuinfo.categoryname"></option> -->
                    <option v-for="category in upcategorylist" :key="category.menuCategoryNo" :value="category.menuCategoryNo">{{category.categoryName}}</option>
                </select>
            </div>
            <div style="clear:both;"></div>
            <div class="menuprice">
                <label for="">가격 : </label> <input type="text" v-model="upmenu.menuPrice" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
            </div>
            <div style="clear:both;"></div>
            <div class="menustock">
                <label for="">재고 : </label> <input type="text" v-model="upmenu.stock" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
            </div>
            <div style="clear:both;"></div>
            <div class="menudes">
                <label style="float:left;" for="">설명 : </label>  <textarea style="width: 255px; height: 80px; float:left; margin-left:5px; resize: none;" v-model="upmenu.menuDes" /><div style="clear:both;"></div>

            </div>
            <div style="clear:both;"></div>
            <div class="menuimg">
                <label for="" style="float:left;">이미지 </label>
                <div style="clear:both;"></div>
                <div style="float:left; width:40px; height:100px;"></div>
                <img class="inputimg" v-if="menuImage==''" :src="getImgUrl()">
                <img class="inputimg" v-else :src="this.menuImageUrl">
                <input ref="menuImage" type="file" id="file" accpet="image/*" @change="fileSelect" style="overflow:hidden;">
            </div>
            <div style="clear:both;"></div>
        </form>
        <button style="border: 0; outline: 0; float:right;background-color:#E7220D; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 10px; margin-bottom:15px;"  @click="deletemenu">삭제</button> 
        <button style="border: 0; outline: 0; float:right;background-color:#E7220D; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 35px; margin-bottom:15px;" type="submit" @click="submit()">수정</button>    
        </div>
    </div>
    </div>
</transition>
</template>

<script>
import axios from 'axios'
import HTTP from "@/util/http-common.js"

export default {
    name : 'MenuUpdate',
    props :['menuinfo', 'catelist'],
    computed: {
        
    },
    data() {
        return {

            menuImage: "",
            menucategory: 0,
            upmenu : {},
            upcategorylist: [],
        }
        
    },
    munted (){
       var selectOption = document.getElementById("categoryselect");
       selectOption.select
    },
    methods: {
        fileSelect() {
            this.menuImage = this.$refs.menuImage.files[0]
            this.menuImageUrl = URL.createObjectURL(this.menuImage)
        },
        submit() {
            const formData = new FormData()
            formData.append('menuImg', this.menuImage)
            formData.append('storeNo', this.upmenu.storeNo)
            formData.append('menuCategoryNo', this.upmenu.menuCategoryNo)
            formData.append('menuName', this.upmenu.menuName)
            formData.append('menuPrice', this.upmenu.menuPrice)
            formData.append('menuDes', this.upmenu.menuDes)
            formData.append('menuNo', this.upmenu.menuNo)
            formData.append('stock', this.upmenu.stock)
            axios.put(`${HTTP.COMMON_URL}/common/menu`, formData)
            .then(() => {
                setTimeout(() => {
                    alert('메뉴가 수정되었습니다.')
                    this.$emit('modifymenu')
                })
            })
        },
        modalclose() {
            this.$emit('close')
        },
        categoryselect(id, name){
            // this.menuinfo.categoryid = id
            // this.menuinfo.name = name
            console.log(id, name)
        },
        deletemenu(){
            axios.delete(`${HTTP.COMMON_URL}/common/menu`, 
            {
                params: {menuNo : this.upmenu.menuNo}
            })
            .then(res=>{
                console.log(res)
                this.$emit('menudelete')
            })
        },
        getImgUrl(){
            return `${HTTP.COMMON_URL}/common/${this.upmenu.menuImg}`
        },
    },
    created(){
        this.upmenu.menuCategoryNo = this.menuinfo.menuCategoryNo
        this.upmenu.menuName=this.menuinfo.menuName
        this.upmenu.menuImg=this.menuinfo.menuImg
        this.upmenu.menuPrice = this.menuinfo.menuPrice
        this.upmenu.menuDes = this.menuinfo.menuDes
        this.upmenu.menuNo = this.menuinfo.menuNo
        this.upmenu.stock = this.menuinfo.stock
        this.upmenu.storeNo = this.menuinfo.storeNo
        this.upcategorylist = this.catelist
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');


    #menuupdateModal{
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        display:table;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    #menuupdateContainer{
        font-family: 'Jua', sans-serif;
        width: 100%;
        overflow: hidden;
        margin: 0px;
        
    }

    .menuform {
        position: absolute;
        top: 8%;
        transform:translateY(-50%);
        left: 50%;

        transform:translateX(-50%);
        width: 385px;
        padding: 25px;
        background-color: white;
        border-radius: 20px;
    }

    .updatetitle {
        font-size: 40px;
        color : black;
    }

    .inputimg {
        width: 200px;
        height: 150px;
        border: 1px solid black;
    }

    .menuname{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
    .menuprice{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
    .menustock{
        float:left;
        margin-bottom: 20px;
        font-size: 15px;
    }

    .menudes{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
    .menuimg{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
    
    .menuimg img{
        margin-bottom: 10px;
    }
</style>