<template>
      <div class="signup container" id="signup">
    <span class="signup-text">Sign Up</span>
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
          placeholder="아이디를 입력하세요." 
          type="text" 
          :disabled="idcheck"
          autocapitalize="none"
          :class="{ error : errorData.storeId  && this.storeId }"
          @keyup.enter="IdCheck"
          />
          <div class="d-none d-md-block col-md-2"></div>
          <button
              @click="IdCheck"
              
              class="btn-components btn-id-check"
            >중복체크</button>
        </div>
        <div class="error-msg" v-if="errorData.storeId">{{ errorData.storeId }}</div>
    </div>


    <div class="form-block password-form">
      <label class="form-block-head" for="password">
          <em class="asterisk-red">*</em>
          비밀번호:
      </label>
      <input 
          class="input-text"
          v-model="storePw" 
          id="password" 
          placeholder="비밀번호를 입력하세요." 
          type="password"
          autocapitalize="none"
           />
      <div class="error-msg" v-if="errorData.storePw">{{ errorData.storePw }}</div>

      <div class="passwordConfirm">
           <label class="form-block-head" for="password">
          <em class="asterisk-red">*</em>
          비밀번호 확인 :
      </label>
          <input 
              class="input-text"
              v-model="storePwConfirm" 
              id="passwordConfirm" 
              placeholder="비밀번호 확인" 
              type="password"
              autocapitalize="none"
              @keyup.enter="signUp"
            />
          <div class="error-msg" v-if="errorData.storePwConfirm">{{ errorData.storePwConfirm }}</div>
      </div>
      
    <div class="form-block">
        <label class="form-block-head" for="username">
            <em class="asterisk-red">*</em>
            상호명:
        </label>
          <input 
          class="input-text"
          v-model="storeName" 
          id="username" 
          placeholder="가게명을 입력하세요." 
          type="text" 
          autocapitalize="none"
         
          />
    </div>
    
    </div>
    <div class="form-block">
        <label class="form-block-head" for="Email">
          <em class="asterisk-red">*</em>
          주소:
          </label>
    <postApi @child="addressco"></postApi>
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
    <div class="term">
      <label class="mb-0">
        <em class="asterisk-red">*</em>
        <input v-model="isTerm" type="checkbox" id="term" />
        <span>약관을 동의합니다.</span>
      </label>
      <p></p>
      <TermModal v-if="termPopup" @close="termPopup = false">
      <h3 slot="header">전체 약관</h3>
      </TermModal>
      <span @click="termPopup=true" id="btn-term">약관보기</span>
      <div class="error-msg terms-err-msg" v-if="errorData.isTerm" v-text="errorData.isTerm"></div>
    </div>
      <button 
          @click="signUp"
          class="btn-components col-4 col-md-2 btn-signup"
      >가입</button>
    </div>
</template>
<script>

import TermModal from "@/components/modal/TermModal.vue"
import postApi from "@/components/DaumApi/postApi.vue"
import PV from "password-validator";
import URL from "@/util/http-common.js"  
import axios from "axios"
export default {
    components:{
        TermModal,
        postApi
    },
    data(){
        return{
           passwordSchema: new PV(),  
            termPopup:false,
             isTerm: false,
             addr:{
              postcode:"",
              address:"",
              extraAddress:"",
              bcode:"",
             },
            idcheck:false,
            storeId:"",
            email:"",
            phoneNumber:"",
            storeName:"",
            storePw:"",
            tel:"",
            regist:"",
            isSubmit:"",
            storePwConfirm:"",
            errorData: {
              storeId: false,
            email: false,
            tel: false,
            storeName: false,
            storePw: false,
            storePwConfirm: false,
           isTerm:false,
           regist:false,
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
        
        signUp(){
            this.formcheck()
          if (!this.isSubmit) {
            
            return
          }
          else{  
              let signUpData = {
                'storeId':this.storeId,
                'storePw': this.storePw,
                'storeName': this.storeName,
                'email': this.email,
                'tel': this.tel,
                'locString':this.addr.address+this.addr.extraAddress,
                'locNum':this.addr.bcode,
                'regist':this.regist,
           }
           console.log(this.signUpData)
           axios.post(`${URL.AUTH_URL}/auth/store`,signUpData)
           .then(res=>{
             console.log(res);
            if(res.data.status=="success"){
               
              this.$router.push('/')
             }else{
               alert("관리자에게 문의하세요")
             }
           })
           .catch(err=>{
             console.log(err)
           })
          }
        },
        formcheck(){
          let isSubmit = true;
            if (!this.isTerm) {
                 this.errorData.isTerm = "약관에 동의해야 합니다."
                isSubmit=false;
                 return ;
              }
            else this.errorData.isTerm = false
            if(this.storeId===""|| (this.storeId.length < 3  || this.storeId.length > 10)|| !this.idcheck){
              this.errorData.storeId = "ID는 3자이상 10자 이하여야 합니다."
              isSubmit=false;
              return ;
            }
            else this.errorData.storeId = false
             if (this.storePw === "" || (this.storePw.length > 0 && !this.passwordSchema.validate(this.storePw))){
               this.errorData.storePw = "비밀번호는 영문, 숫자포함 8자리 이상이어야 합니다."
               isSubmit=false;
                return ;
             }
            else this.errorData.password = false

            if (this.storePwConfirm === "" || (this.storePwConfirm.length > 0 && this.storePwConfirm !== this.storePw))
              {
                  isSubmit=false;
                 this.errorData.storePwConfirm = "비밀번호가 일치하지 않습니다."
                return ;
              }
            else {
              this.errorData.storePwConfirm = false
              
            }
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
        IdCheck(){
           axios.get(`${URL.AUTH_URL}/auth/store/check`,{
            params : {storeId:`${this.storeId}`}
    })
       .then(res=> {
          if(res.data.status=="no"){
              alert("사용가능한 아이디 입니다.")
              this.idcheck=true;
          }else{
            alert("사용 불가능한 아이디입니다.")
            this.errorData.storeId="사용 불가능한 아이디입니다."
          }
           
         
       })
       .catch(err=>{
         console.log(err);
        
       })
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