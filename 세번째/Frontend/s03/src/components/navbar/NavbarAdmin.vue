<template>
<nav  id="navcontainer" class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" style="float:left;" href="/"><img src="../../assets/logo/logo.png" alt="Logo Image" style="width:10rem"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<LoginModal v-if="loginModal" @close="changeLogin"></LoginModal>
  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav" v-if="isLoggedIn&&getloginType==1" style="float:left;">
   
      <li>
        <a class="nav-link" href="#" @click="orderstatus" >주문 현황</a>
      </li>
      <li class="">
        <a class="nav-link" href="#">매출 관리</a>
      </li>
      <li class="">
        <a class="nav-link" href="/Table">테이블 관리</a>
      </li>
      <li class="dropdown">
        <a class="nav-link" href="#" @click="menumanage">
          메뉴판 관리
        </a>
      
      </li>
    </ul>
      <div v-if="!isLoggedIn" class="loginbox" style="float:right;">
        <ul class="navbar-nav nav" >
         <li class="nav-item" >
            <a class="nav-link" @click="changeLogin()">로그인</a>
         </li>
          </ul>
      </div>
              <ul class="navbar-nav nav" v-if="isLoggedIn" style="float:right;">
      <li class="">
        <a class="nav-link" href="/ChangeInfo">가게 설정</a>
      </li>
                 <li class="nav-item" >
                  <a class="nav-link" @click="logout()">로그아웃</a>
                </li>
          </ul>
      </div>
  
</nav>
</template>
<script>
import LoginModal from '@/components/modal/LoginModal.vue'
export default {
    data(){
        return{
            
            loginModal:false,
            NavType:0,
        }
    },methods:{
       changeLogin () {
          this.loginModal = !this.loginModal
          this.NavType=this.$store.getloginType;
          if(this.NavType==1){
            this.$router.push('/')
          }
          if(this.NavType==2){
            this.$router.push('/')
          }
      },
      logout(){
        this.$session.remove('jwstoken')
        this.$store.commit('logout')
        this.$router.push('/')
        this.NavType=0;
      },
      menumanage() {
        this.$router.push({name : 'MenuInfo'})
      },
      orderstatus() {
        this.$router.push({name : 'OrderStatus'})
      },

    },components:{
      LoginModal,
    },computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        
        },
        getloginType(){
          return this.$store.getters.getloginType
        }
    }
}
</script>
<style scoped>

#navcontainer {
  z-index: 9998;
}

.nav-link{
  padding: 0 0 0 0 !important;
  margin-left : 20px !important;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: bold;
  display:table-cell;
  vertical-align:middle;
  max-width: 110px;
}
li {
  margin-left : 20px;
}
.loginbox{
  margin-left:80%;
}
nav{
  margin-bottom:0%;
  height: 10%;
}
  .nav-item{
    margin-left:10px;
    font-size:1.5rem;
  }
  #navbar-left{
    margin-left:30%;
  }

  .navbar-nav{
    margin-left: 20px;
  }

  #navbarSupportedContent{
    display: block !important;
  }

</style>