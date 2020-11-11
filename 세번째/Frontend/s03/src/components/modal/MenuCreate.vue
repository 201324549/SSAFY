<template>
<transition name ="modal">
    <div id="menucreateModal">
    <div id="menucreateContainer">
        
        <div class="menuform">
            <button type="button" class="close" data-dismiss="modal" @click="modalclose">×</button>
        <p class="createtitle">
            메뉴 등록
        </p>
        
        <hr style="background-color: black;">
        <br>
        <form action="">

            <div class="menuname">
                <label for="">이름 : </label> <input type="text" style="margin-right: 10px;" v-model="createmenu.menuName" >
                <select name="category" id="" style="padding:5px;" v-model="createmenu.menuCategoryNo" >
                    <option v-for="category in catelist" :key="category.menuCategoryNo" :value="category.menuCategoryNo" >{{category.categoryName}}</option>
                </select>
            </div>
            <div style="clear:both;"></div>
            <div class="menuprice">
                <label for="">가격 : </label> <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" v-model="createmenu.menuPrice">
            </div>
            <div style="clear:both;"></div>
            <div class="menudes">
                <label style="float:left;" for="">설명 : </label>  <textarea style="width: 255px; height: 80px; float:left; margin-left:5px; resize: none;" v-model="createmenu.menuDes" /><div style="clear:both;"></div>

            </div>
            <div style="clear:both;"></div>
            <div class="menuimg">
                <label for="" style="float:left;">이미지 </label>
                <div style="clear:both;"></div>
                <div v-if="menuImageUrl" style="float:left; width:40px; height:100px;"></div>
                <img class="inputimg" v-if="menuImageUrl" :src="menuImageUrl">
                <input ref="menuImage" type="file" id="file" accpet="image/*" @change="fileSelect" style="overflow:hidden;">
            </div>
            <div style="clear:both;"></div>
        </form>
        <button style="border: 0; outline: 0; float:right;background-color:#E7220D; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 35px; margin-bottom:15px;" type="submit" @click="submit()">등록</button>    
        </div>
    </div>
    </div>
</transition>
</template>

<script>
import axios from 'axios'
import HTTP from "@/util/http-common.js"

export default {
    name : 'MenuCreate',
    props:['catelist'],
    computed: {

    },
    data() {
        return {
            menuImage: "",
            menuImageUrl: "",
            createmenu : {
                storeNo : this.$store.getters.getStoreData.storeNo,
                menuCategoryNo : 1,
                menuName : "",
                menuPrice : 0,
                menuDes : "",
            },
        }
        
    },

    methods: {
        fileSelect() {
            this.menuImage = this.$refs.menuImage.files[0]
            this.menuImageUrl = URL.createObjectURL(this.menuImage)
        },
        submit() {
            const formData = new FormData()
            formData.append('menuImg', this.menuImage)
            formData.append('storeNo', this.createmenu.storeNo)
            formData.append('menuCategoryNo', this.createmenu.menuCategoryNo)
            formData.append('menuName', this.createmenu.menuName)
            formData.append('menuPrice', this.createmenu.menuPrice)
            formData.append('menuDes', this.createmenu.menuDes)
            
            axios.post(`${HTTP.COMMON_URL}/common/menu`, formData)
            .then(() => {
                setTimeout(() => {
                    alert('등록되었습니다.')
                    this.$emit('createmenu')
                })
            })
            .catch(err => {
                console.log(err)
            })
        },
        modalclose() {
            this.$emit('close')
        },
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');


    #menucreateModal{
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

    #menucreateContainer{
        font-family: 'Jua', sans-serif;
        width: 100%;
        overflow: hidden;
        margin: 0px;
        
    }

    .menuform {
        position: absolute;
        top: 15%;
        transform:translateY(-50%);
        left: 50%;

        transform:translateX(-50%);
        width: 385px;
        padding: 25px;
        background-color: white;
        border-radius: 20px;
    }

    .createtitle {
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