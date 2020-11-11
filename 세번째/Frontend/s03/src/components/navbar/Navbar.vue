<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img src="../../assets/logo/logo.png" alt="Logo Image" style="width:10rem"></a>
    </div>
  <LoginModal v-if="loginModal" @close="changeLogin"></LoginModal>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#">테이블 현황</a></li>
        <li><a href="#">메뉴판 관리</a></li>
        <li><a href="#">매출 관리</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li><a @click="changeLogin()"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import LoginModal from '@/components/modal/LoginModal.vue'
export default {
    data(){
        return{
            isLogin:false,
            loginModal:false,
        }
    },methods:{
      signup(){
          this.$router.push({name:'SignUp'})
      },
       changeLogin () {
      this.loginModal = !this.loginModal
      
      },

    },components:{
      LoginModal,
    }
}
</script>