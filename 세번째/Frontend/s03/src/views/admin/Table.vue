<template>
  <div>
      <TableUpdate :tableinfo="this.uptable" v-if="TableUpdate" @close="closemodal(2)" @modifytable="modifytable()"  @tabledelete="tabledelete()"></TableUpdate>
      <TableCreate v-if="TableCreate" @close="closemodal(1)" @createtable="crtable"/>
    <div id="tablecontainer">

      <div class="tableitem" v-for="table in tableList" :key="table.tableNo" @click="updateTable(table)">
            <div class="tablename">
                {{table.tableName}}
            </div>
            <div class="tableorder">

            </div>
            <div class="darknessdiv"></div>
            <div class="updatediv">
                <span draggable="false">수정하기</span>
            </div>
      </div>
    <div style="clear:both;"></div>
      <button  class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="float:right; margin-right:50px;" @click="tablecreate">
            테이블 추가하기
        </button>


        </div>
  </div>
</template>

<script>
import axios from "axios";
import HTTP from "@/util/http-common.js"
import TableUpdate from '@/components/modal/TableUpdate.vue'
import TableCreate from '@/components/modal/TableCreate.vue'
export default {

    components: {
        TableUpdate,
        TableCreate,
    },

    data() {
        return{
           TableUpdate: false,
           TableCreate: false,
            togle: true,
            createtable : {
                tableName : "",
                storeNo : this.$store.getters.getStoreData.storeNo,

            },
            tableList : [],

        }
    },
    created() {
        axios.get(`${HTTP.COMMON_URL}/common/table/byStoreNo`, 
            {
                params : {storeNo : this.$store.getters.getStoreData.storeNo}

            }
        )
        .then( res => {
            console.log(res)
            this.tableList = res.data.data
            console.log(this.tableList)
        })

    },
    methods: {
        cratetable() {    // 테이블 개수 받고 axios 요청
            axios.post(`${HTTP.COMMON_URL}/common/table`, this.createtable)
           .then(res => {
               console.log(res)
               this.createtable.tableName = "";

           })
           .catch(err => {
               console.log(err)
            })
        },
        updateTable(table){
            this.uptable = table;
            this.TableCreate = false;
            this.TableUpdate = true;
            
        },
        closemodal(num){
            if(num == 1){
                this.TableCreate = !this.TableCreate
            } else if(num == 2){
                this.TableUpdate = !this.TableUpdate
            }
        },
        modifytable(){
            this.TableUpdate = !this.TableUpdate
            location.reload()
        },
        tabledelete(){
            this.TableUpdate = !this.TableUpdate
            location.reload()
        },
        tablecreate(){
            this.TableUpdate = false;
            this.TableCreate = true;
        },crtable(){
            this.TableCreate = !this.TableCreate
            location.reload()
        }

        
     }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@700&display=swap');    .di2{
        display: inline-block;
        
    }
    .di1{
        height: 40px;
        width: 200px;
        background-color: white;
        padding: 30px;
        border: 1px solid gold
    }
    #over:hover {
        background-color: azure;
    }

    #tablecontainer {
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

    .tableitem {
        position : relative;
        background-color: white;
        color:#2CAEEC;
        padding: 10px;
        margin: 10px;
        width: 200px;
        height: 200px;
        float:left;
        font-family: 'Nanum Gothic Coding', monospace;     
        box-shadow: 0 1px 5px  #2CAEEC;
    }



    .tablename {
        font-size: 15px;
    }

    .updatediv{
        position: absolute;
        text-align:center;
        background-color: transparent;
        opacity: 0;
        transform: scale(2);
        transition: all .3s linear;
        font-size: 25px;
        color: white;
        user-select: none;
        top: 83px;
        left: 50px;
    }
    .updatediv span{
        display:inline-block;
    }

    .darknessdiv{
        position:absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        opacity: 0;
        background-color: black;
        transition:all .6s linear;
    }


    .tableitem:hover .darknessdiv {
        opacity: 0.4;
    }

    .tableitem:hover .updatediv {
        opacity: 1;
        transform:scale(1);
        
    }
</style>