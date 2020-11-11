<template>
<transition name ="modal">
    <div id="tableupdateModal">
    <div id="tableupdateContainer">
        
        <div class="tableform">
            <button type="button" class="close" data-dismiss="modal" @click="modalclose(2)">×</button>
        <p class="updatetitle">
            테이블 수정
        </p>
        
        <hr style="background-color: black;">
        <br>
        <form action="">

            <div class="tablename">
                <label for="">이름 : </label> <input type="text" v-model="uptable.tableName" style="margin-right: 10px;">
            </div>
            <div style="clear:both;"></div>
            <div style="clear:both;"></div>
            
        </form>
        <button style="border: 0; outline: 0; float:right;background-color:#E7220D; background:radial-gradient(#f5af19 ,#c31432 ); color:white; padding:5px 20px 5px 20px; font-size: 15px; margin-right: 10px; margin-bottom:15px;"  @click="deletetable">삭제</button> 
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
    name : 'TableUpdate',
    props :['tableinfo'],
    computed: {
        
    },
    data() {
        return {

            uptable : {},
        }
        
    },
    methods: {
        submit() {
            
            axios.put(`${HTTP.COMMON_URL}/common/table/updateTableName`, 
            {
                params : {tableNo : this.uptable.tableNo, tableName: this.uptable.tableName}
            })
            .then(() => {
                alert("테이블명이 수정되었습니다.")
                this.$emit('modifytable')
            })
        },
        modalclose() {
            this.$emit('close')
        },
        deletetable(){
            axios.delete(`${HTTP.COMMON_URL}/common/table`, 
            {
                params: {tableNo : this.uptable.tableNo}
            })
            .then(res=>{
                console.log(res)
                alert("테이블 삭제가 완료되었습니다.")
                this.$emit('tabledelete')
            })
        },
        getImgUrl(){
            return `${HTTP.COMMON_URL}/common/${this.uptable.tableImg}`
        },
    },
    created(){
        this.uptable.tableName=this.tableinfo.tableName
        this.uptable.tableNo = this.tableinfo.tableNo
        this.uptable.storeNo = this.tableinfo.storeNo
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');


    #tableupdateModal{
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

    #tableupdateContainer{
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

    .updatetitle {
        font-size: 40px;
        color : black;
    }


    .tablename{
        float:left;
        margin-bottom: 20px;
        font-size : 15px;
    }
</style>