<template>
<transition name ="modal">
    <div id="cateupdateModal">
    <div id="cateupdateContainer">
        
        <div class="cateform">
            <button type="button" class="close" data-dismiss="modal" @click="modalclose">×</button>
        <p class="catetitle">
            카테고리 수정
        </p>
        
        <hr style="background-color: black;">
        <br>
        <form action="">

            <div class="cateupdatename">
                <label for="">이름 : </label> <input v-model="updatecate.categoryName" type="text" style="margin-right: 10px;">
            </div>
            
            <div style="clear:both;"></div>
            
        </form>
        <button style="border: 0; outline: 0; float:right;background-color:#E7220D; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 10px; margin-bottom:15px;"  @click="deletecate">삭제</button> 
        <button style="border: 0; outline: 0; float:right;background-color:#E7220D; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 10px; margin-bottom:15px;" type="submit" @click="submit">수정</button>
        </div>
    </div>
    </div>
</transition>
</template>

<script>
import axios from 'axios'
import HTTP from "@/util/http-common.js"
export default {
    name : 'CateUpdate',
    props: ['cateinfo'],
    computed: {

    },
    data() {
        return {
            updatecate : {},
        }
        
    },

    methods: {
        submit() {
            console.log(this.updatecate)
            axios.put(`${HTTP.COMMON_URL}/common/menuCategory`, this.updatecate)
            .then(res => {
                console.log(res)
                this.$emit('catemodify')
            })
        },
        modalclose() {
            this.$emit('close')
        },
        deletecate(){
            axios.delete(`${HTTP.COMMON_URL}/common/menuCategory`,
            {
                params: {menuCategoryNo : this.updatecate.menuCategoryNo}
            })
            .then(res=>{
                console.log(res)
                this.$emit('catedelete')
            })

        }
    },
    created(){
        this.updatecate.menuCategoryNo = this.cateinfo.menuCategoryNo
        this.updatecate.categoryName = this.cateinfo.categoryName
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');


    #cateupdateModal{
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

    #cateupdateContainer{
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


    .cateupdatename{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
  
</style>