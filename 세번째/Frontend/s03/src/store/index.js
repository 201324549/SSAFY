import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)
// const session = this.$session
export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    isLoggedIn: false,
    userData: null,
    storeData: null,
    loginType:0,
    
  },
  mutations: {
    userlogin(state, userData) {
      state.isLoggedIn = true
      state.userData = userData

    },
    storelogin(state, storeData){
      state.isLoggedIn = true
      state.storeData = storeData
    },
    logout(state) {
      state.isLoggedIn = false
      state.storeData=null
      state.userData = null
      state.loginType=0;
      // this.$router.go('/')
    },
    
    setUserInfo(state, userinfo) {
      state.userData.userinfo.userno = userinfo.userNo
    },
    setStoreInfo(state,storeinfo){
      state.storeData.storeinfo.storeNo= storeinfo.storeNo
      state.storeData.storeinfo.storeName = storeinfo.storeName
    },
    setloginType(state, num){
      state.loginType=num
    }
  },
  actions: {
    setNavbar() {
      setTimeout(() =>{
          
      })
    }
  },
  modules: {
  },
  getters: {
    isLoggedIn(state) {
      if (state.userData === null && state.storeData=== null) {
        return false
      }
      else {
        return true
      }
    },
    getUserData(state) {
      return state.userData
    },
    getStoreData(state){
      return state.storeData
    },
    getloginType(state){
      return state.loginType
    }
  }
})
