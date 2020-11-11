<template>
  <transition name="modal">
    <div id="loginModal">
        <div class="modal-mask">
          <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-header">
                  <h3>로그인</h3>
                  <button type="button" class="close" data-dismiss="modal" @click="modalclose">×</button>
                </div>
                <div class="modal-body">
                    <slot name="body">
                      <div class="form">
                          <div>   
                              <ul>
                                <button class="button-group-1" style="background-color:white; width:50%; float:left;" id="1" @click="clickmenu(1)" >일반회원</button>
                                <button class="button-group-1" style="background-color:white; width:50%; float:left;" id="2" @click="clickmenu(2)" >식당회원</button>
                              </ul>
                          </div>
                          <div style="clear:both;"></div>
                        <div class="input-box font-notojp">
                          <label class="input-label" for="inputname">ID</label>
                          <input type="text" id="inputname" placeholder="아이디를 입력하세요." v-model="userid">
                          <!-- <div v-if="errorData.id" class="error-msg" v-text="errorData.id"></div> -->
                        </div>
                        <div class="input-box font-notojp">
                          <label class="input-label" for="inputpassword">Password</label>
                          <input type="password" id="inputpassword" placeholder="패스워드를 입력하세요." v-model="userpw" @keyup.enter="login">
                        </div>
                        <button class="font-notojp button-group1"  type="submit" @click="login" >Login</button>
                      </div>
                    </slot>
                </div>
                <hr>
              </div>
          </div>
        </div>
        </div>
    </transition>
</template>
<script>
import URL from "@/util/http-common.js" 
import axios from "axios"
export default {
    data(){
        return {
            userid:"",
            userpw:"",
            isWho:false,
           
        }
    },
   mounted() {
        document.getElementById(1).style.color = "rgb(236,128,116)" ;
        document.getElementById(1).style.borderBottom = "2px solid  rgb(236,128,116)";
    },
    methods: {
        clickmenu(num) {
            document.getElementById(num).style.color = " rgb(236,128,116)";
            document.getElementById(num).style.borderBottom = "2px solid rgb(236,128,116)";
            if(num==1){
                 document.getElementById(2).style.color = "black";
                document.getElementById(2).style.border = "0px";
                this.isWho=false;
            }else{
                  document.getElementById(1).style.color = "black";
                document.getElementById(1).style.border = "0px";
                this.isWho=true;
            }

        },login(){
          if(this.isWho==true){
            let loginData={
               'storeId':this.userid,
               'storePw':this.userpw,
            }
          axios.post(`${URL.AUTH_URL}/auth/store/login`,loginData)
           .then(res=>{
             if(res.data.status=="success"){
                this.$session.set('jwstoken', res.data.token)
                this.$store.commit('storelogin', res.data.data)
                this.$store.commit('setloginType',1)
            
                if(this.isWho==false){
              
                  this.$router.push({name: "StoreList"})
                }
                this.modalclose();
             }else{
               alert('일치하는 회원정보가 없습니다')
               return ;
             }
           })
           .catch(err=>{
             console.log(err)
           })
          }
          else{
            let loginData={
              'customerId':this.userid,
              'customerPw':this.userpw
            }
            axios.post(`${URL.AUTH_URL}/auth/customer/login`,loginData)
            .then(res=>{
              console.log(res)
              if(res.data.status=="success"){
                 this.$session.set('jwstoken', res.data.token)
                this.$store.commit('userlogin', res.data.data)
                this.$store.commit('setloginType',2)
               
                if(this.isWho==false){
               
                  this.$router.push({name: "StoreList"})
                }
                this.modalclose();
              }else{
                alert('일치하는 회원정보가 없습니다')
                return ;
              }
            })
          }
          
        },
        modalclose () {
        this.$emit('close')
        },
    }
}
</script>
<style scoped>
 .button-group-1{
     /* display:inline-block; */
    border:0;
    outline:0;
    background-color:white;
 }
button:focus{
    outline:none !important;
}
    .button-group1{
 
  background-color: rgb(236,128,116);
    border: 0;
        color: white;
        padding: 5px 15px 5px 15px;
        font-size: 1.25rem;
        border-radius: 3px;
        padding: 7px;
 }
      /* model */
  #loginModal hr {
    margin-top: 0;
  }
  #loginModal .form button {
    width: 100%;
  }
  #loginModal .modalfooter {
    display: block;
    text-align: right;
    margin: 0 20px;
  }
  #loginModal .input-box {
   margin-bottom: 10px;
  }
  #loginModal .input-box input {
    width: 100%;
    height: 40px;
    border: 0.8px; 
    padding-left: 10px;
    border-style: none none solid none;
  }
  #loginModal .input-label {
    font-size: 16px;
    margin: 0 0 10px 0;
    padding: 8px 0 0 0;
    text-align: right;
    font-weight: bolder
  }

  #loginModal .login-type {
    display: flex;
    justify-content: space-around;
  }

  #loginModal .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  #loginModal .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  #loginModal .modal-container {
    width: 350px;
    min-width: 300px;
    margin: 0px auto;
    padding: 20px 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(155, 121, 121, 0.33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
  #loginModal .modal-header {
    padding-top: 0;
    padding-bottom: 0;
  }
  #loginModal .modal-header h3 {
    margin-top: 0;
    color: rgb(236,128,116);
  }

  #loginModal .modal-body {
    margin: 0 0;
  }
  #loginModal .modal-body button {
    margin: 10px 0 10px 0;
    /* padding: 10px 0; */
  }
  #loginModal .modal-default-button {
    float: right;
  }

  /*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */

  #loginModal .modal-enter {
    opacity: 0;
  }

  #loginModal .modal-leave-active {
    opacity: 0;
  }

  #loginModal .modal-enter .modal-container,
  #loginModal .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  #loginModal .error-msg {
  width: 100%;
  float: left;
  color: #EE4B55;
  font-size: 14px;
  }
  @media (min-width: 768px) {
    
    #loginModal .modal-container {
      width: 20%;
    }
  }
</style>