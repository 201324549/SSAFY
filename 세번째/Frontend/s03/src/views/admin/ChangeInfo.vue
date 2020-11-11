<template>
      <div class="signup container" id="signup">
    <span class="signup-text">가게정보 수정</span>
    <hr class="mb-4 ">
    <div class="signup-head">
      
    </div>
      <div class="form-block">
        <label class="form-block-head" for="userid">
            <em class="asterisk-red">*</em>
            아이디:
        </label>
        <div class="d-flex justify-content-between">
          <input 
          class="input-text col-8 col-md-8" v-model="storeId" id="storeId" 
          type="text" 
          disabled
          autocapitalize="none"
          />
        </div>
      </div>
      
      
      
    <div class="form-block">
        <label class="form-block-head" for="storeName">
            <em class="asterisk-red">*</em>
            상호명:
        </label>
          <input 
          class="input-text"
          v-model="storeName" 
          id="storeName" 
          placeholder="가게명을 입력하세요." 
          type="text" 
          autocapitalize="none"
         
          />
    </div>
        <div class="form-block">
        <label class="form-block-head" for="Email">
          Email:
          </label>
        <input 
            class="input-text"
            v-model="email" 
            id="Email" 
            placeholder="이메일 입력하세요 " 
            type="Email"
            autocapitalize="none"
        />
        <div class="error-msg" v-if="errorData.email">{{ errorData.email }}</div>
    </div>
    

    <div class="form-block">
        <label class="form-block-head" for="tel">
          Tel:
          </label>
        <input 
            class="input-text"
            v-model="tel" 
            id="tel" 
            placeholder="휴대전화번호를 입력하세요 ('-' 제외)" 
            type="tel"
            autocapitalize="none"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        />
        <div class="error-msg" v-if="errorData.tel">{{ errorData.tel }}</div>
    </div>
     <div class="form-block">
        <label class="form-block-head" for="regist">
          사업자번호:
          </label>
        <input 
            class="input-text"
            v-model="regist" 
            id="regist" 
            placeholder="사업자번호를 입력하세요 ('-' 제외)" 
            type="regist"
            autocapitalize="none"
        />
        <div class="error-msg" v-if="errorData.regist">{{ errorData.regist }}</div>
    </div>
      <button 
          @click="changeInfo"
          class="btn-components col-4 col-md-2 btn-signup"
      >변경</button>
    </div>
      
</template>
<script>
import PV from "password-validator";
import URL from "@/util/http-common.js" 
import axios from "axios"
export default {
    components:{
    },
    data(){
        return{
            passwordSchema: new PV(),  
            termPopup:false,
            isTerm: false,
            email:"",
            storeId:"",
            storeName:"",
            storePw:"",
            tel:"",
            isSubmit:"",
            storePwConfirm:"",
            regist:"",
            address:{},
            errorData: {
            email: false,
            storeName: false,
            storePw: false,
            storePwConfirm: false,
            tel:false,
            isTerm:false,
            },
        }
    },methods:{
         addressco(data){
          this.addr.address = data.address;
          this.addr.postcode = data.postcode;
          this.addr.extraAddress = data.extraAddress;
          this.addr.bcode = data.bcode;
          console.log(this.addr)
        },
        checkform(){
          let isSubmit=true;
            if(this.regist===""){
              this.errorData.regist="사업자번호를 입력해주세요"
            }else{
              this.errorData.regist=false;
            }
            if(this.email===""){
              this.errorData.email="이메일을 입력해주세요"
            }else{
              this.errorData.email=false;
            }
            this.isSubmit=isSubmit;
        },
        changeInfo(){
          this.checkform();
          
          if(!this.isSubmit)return ;
          else{
            let formdata = {
              'storeId' : this.storeId,
              'storeName' : this.storeName,
              'tel' : this.tel,
              'regist' : this.regist
              
            }
            axios.put(`${URL.AUTH_URL}/auth/store`,formdata)
            .then(res=>{
              if(res.data.status=="success"){
                alert('수정완료')
                this.$router.push('/')
              }else{
                alert('잠시 후 시도해 주시기 바랍니다.')
              }
            }).catch(err=>{
              console.log(err)
            })
          }
        }
        
        

    },
    created() {
        this.passwordSchema
        .is()
        .min(8)
        .is()
        .max(100)
        .has()
        .digits()
        .has()
        .letters();
        var token = this.$session.get('jwstoken');

      axios.get(`${URL.AUTH_URL}/auth/store/byno/${this.$store.getters.getStoreData}`,
        {headers :  {Authorization :  token,
                      'Content-Type':'application/json',
                      
        }},
        
      ).then(res =>{
        console.log(res)
        this.storeId = res.data.data.storeId;
        this.email = res.data.data.email;
        this.tel = res.data.data.tel;
        this.storeName = res.data.data.storeName;
        this.regist = res.data.data.regist;
      }).catch(err =>{
        console.log(err)
      })
         },
    
}
</script>
<style scoped>
#signup .password-form input{
  margin-top: 15px;
}
#signup .signup {
  padding: 0 30px;
  margin-top: 30px;
}
#signup .duplicateMsg {
  color: forestgreen;
}

#signup .duplicate {
  color: red;
}

#btn-term {
  font-weight: bold;
}
#btn-term:hover {
  cursor: pointer;
}
#signup .btn-id-check {
  height: 40px;
  font-size: 13px;
  padding: 7px;
  margin-left: 10px;
}

#signup .btn-components {
  width: 100%;
  outline: none;
}

#signup .dup-err {
  color: #EE4B55;
}

#signup .success {
  color: forestgreen;
}

#signup .passwordConfirm {
  margin: 10px 0 25px;
}
#signup .signup-head {
  display: flex;
  font-size: 15px;
  margin: 15px 4px;
}
#signup .error-msg {
  width: 100%;
  float: left;
  color: #EE4B55;
  font-size: 14px;
}

#signup .signup-text {
  display: block;
  font-weight: bolder;
  margin: 20px 0;
  font-size: 2rem;
}

#signup .terms {
  margin-bottom: 0;
}

#signup .terms-err-msg {
  margin-left: 20px;
}


#signup .form-block-head {
  font-size: 16px;
  margin: 0;
  padding: 8px 0 0 0;
  font-weight: bolder
}

#signup .form-block {
  margin-bottom: 25px;
}


#signup .asterisk-red {
  color: red;
}

#signup .sub-address {
  margin-top: 10px;
}


#signup input:focus {
outline: none;
box-shadow: 0 0 0 3px #3487e683;
border: none;
}

#signup .btn-signup {
  margin: 15px 0;
  float: right;
}

#signup .input-text, #signup select {
  width: 100%;
  /* height: 40px; */
  border: 0.8px;
  border-radius: 0;
  padding-left: 10px;
  border-style: none none solid none;
}

#signup .input-radio {
  margin: 0 5px;
  width: 15px;
  height: 15px;
}

#signup .error {
  border: 1px solid;
  border-color: #EE4B55;
  outline-style: none;
}

#signup .form-group label:first-child {
  display: block;
}
button {
        background-color: rgb(236,128,116);
        border: 0;
        color: white;
        padding: 5px 15px 5px 15px;
        font-size: 1.25rem;
        border-radius: 3px;
    }
</style>