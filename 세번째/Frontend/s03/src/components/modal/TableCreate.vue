<template>
<transition name ="modal">
    <div id="tablecreateModal">
    <div id="tablecreateContainer">
        
        <div class="tableform">
            <button type="button" class="close" data-dismiss="modal" @click="modalclose(1)">×</button>
        <p class="createtitle">
            테이블 등록
        </p>
        
        <hr style="background-color: black;">
        <br>
        <form action="">

            <div class="tablename">
                <label for="">이름 : </label> <input type="text" v-model="crtable.tableName" style="margin-right: 10px;">
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
    name : 'TableCreate',
    computed: {
        
    },
    data() {
        return {

            crtable : {
                tableName : "",
                storeNo : this.$store.getters.getStoreData.storeNo,
            },
        }
        
    },
    methods: {
        submit() {
            
            axios.post(`${HTTP.COMMON_URL}/common/table`, this.crtable)
            .then(res => {
                console.log(res)
                alert("테이블이 등록되었습니다.")
                this.$emit('createtable')
            })
        },
        modalclose() {
            this.$emit('close')
        },
    },
    created(){
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');


    #tablecreateModal{
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

    #tablecreateContainer{
        font-family: 'Jua', sans-serif;
        width: 100%;
        overflow: hidden;
        margin: 0px;
        
    }

    .tableform {
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


    .tablename{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
</style>