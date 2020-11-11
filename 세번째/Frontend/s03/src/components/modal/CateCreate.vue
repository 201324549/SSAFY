<template>
<transition name ="modal">
    <div id="catecreateModal">
    <div id="catecreateContainer">
        
        <div class="cateform">
            <button type="button" class="close" data-dismiss="modal" @click="modalclose">×</button>
        <p class="catetitle">
            카테고리 등록
        </p>
        
        <hr style="background-color: black;">
        <br>
        <form action="">

            <div class="catecreatename">
                <label for="">이름 : </label> <input type="text"  v-model="createcate.categoryName" style="margin-right: 10px;">
            </div>
            
            <div style="clear:both;"></div>
            
        </form>
        <button style="border: 0; outline: 0; float:right;background-color:#E05C06; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 35px; margin-bottom:15px;" type="submit" @click="submit()">등록</button>    
        </div>
    </div>
    </div>
</transition>
</template>

<script>
import axios from 'axios'
import HTTP from "@/util/http-common.js"
export default {
    name : 'CateCreate',
    computed: {

    },
    data() {
        return {
            createcate : {
                storeNo: this.$store.getters.getStoreData.storeNo,
                categoryName: "",
            },
        }
        
    },

    methods: {
        submit() {
            console.log(this.createcate)
           axios.post(`${HTTP.COMMON_URL}/common/menuCategory`, this.createcate)
           .then(res => {
               console.log(res)
               this.$emit('cateinsert')
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


    #catecreateModal{
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

    #catecreateContainer{
        font-family: 'Jua', sans-serif;
        width: 100%;
        overflow: hidden;
        margin: 0px;
        
    }

    .cateform {
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

    .catetitle {
        font-size: 40px;
        color : black;
    }


    .catecreatename{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
  
</style>