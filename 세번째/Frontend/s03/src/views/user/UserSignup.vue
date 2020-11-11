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
          class="input-text col-8 col-md-8" v-model="Id" id="Id" 
          placeholder="아이디를 입력하세요." 
          type="text" 
          :disabled="idcheck"
          autocapitalize="none"
            @keyup.enter="IdCheck"
          :class="{ error : errorData.Id  && this.Id }"
          />
          <div class="d-none d-md-block col-md-2"></div>
          <button
              @click="IdCheck()"
              class="btn-components btn-id-check"
            >중복체크</button>
        </div>
        <div class="error-msg" v-if="errorData.Id">{{ errorData.Id }}</div>
    </div>


    <div class="form-block password-form">
      <label class="form-block-head" for="password">
          <em class="asterisk-red">*</em>
          비밀번호:
      </label>
      <input 
          class="input-text"
          v-model="Pw" 
          id="password" 
          placeholder="비밀번호를 입력하세요." 
          type="password"
          autocapitalize="none"
           />
      <div class="error-msg" v-if="errorData.Pw">{{ errorData.Pw }}</div>

      <div class="passwordConfirm">
           <label class="form-block-head" for="password">
          <em class="asterisk-red">*</em>
          비밀번호 확인 :
      </label>
          <input 
              class="input-text"
              v-model="PwConfirm" 
              id="passwordConfirm" 
              placeholder="비밀번호 확인" 
              type="password"
              autocapitalize="none"
              @keyup.enter="signUp"
            />
          <div class="error-msg" v-if="errorData.PwConfirm">{{ errorData.PwConfirm }}</div>
      </div>
      
    <div class="form-block">
        <label class="form-block-head" for="username">
            <em class="asterisk-red">*</em>
            이름:
        </label>
          <input 
          class="input-text"
          v-model="Name" 
          id="username" 
          placeholder="이름을 입력하세요." 
          type="text" 
          autocapitalize="none"
         
          />
    </div>
    
    </div>
    <div class="form-block">
        <label class="form-block-head" for="Email">
          <em class="asterisk-red">*</em>
          성별:
          </label>
                          <div>   
                              <ul>
                                <button class="button-group-1" style="background-color:white; width:50%; float:left;" id="1" @click="clickgender(1)" >남자</button>
                                <button class="button-group-1" style="background-color:white; width:50%; float:left;" id="2" @click="clickgender(2)" >여자</button>
                              </ul>
                          </div>
                           
     </div>
     <br>
     <br>
        <div class="form-block">
        <label class="form-block-head" for="age">
            <em class="asterisk-red">*</em>
      나이: 
          </label>
        <input 
            class="input-text"
            v-model="age" 
            id="age" 
            placeholder="나이를 입력하세요(숫자만 입력해주세요) " 
            type="age"
            autocapitalize="none"
        />
        <div class="error-msg" v-if="errorData.age">{{ errorData.age }}</div>
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
import PV from "password-validator";
import URL from "@/util/http-common.js" 
import axios from "axios"
export default {
    components:{
        TermModal,
        
    },
    data(){
        return{
           passwordSchema: new PV(),  
            termPopup:false,
             isTerm: false,
            idcheck:false,
            gender:"M",
            Id:"",
            email:"",
            age:"",
            Name:"",
            Pw:"",
            tel:"",
            isSubmit:"",
            PwConfirm:"",
            errorData: {
              Id: false,
            gender: false,
          tel: false,
          Name: false,

          Pw: false,
          PwConfirm: false,
           isTerm:false,
           age:false,
            },
        }
    },watch:{
    age(){
      return this.age = this.age.replace(/[^0-9]/g, '');
      },
    tel(){
      return this.tel = this.tel.replace(/[^0-9]/g,'');
    }
    },
methods:{
          clickgender(num){
            document.getElementById(num).style.color = " rgb(236,128,116)";
            document.getElementById(num).style.borderBottom = "2px solid rgb(236,128,116)";
            if(num==1){
                 document.getElementById(2).style.color = "black";
                document.getElementById(2).style.border = "0px";
                this.gender='M';
            }else{
                  document.getElementById(1).style.color = "black";
                document.getElementById(1).style.border = "0px";
                this.gender='W';
            }
          },
  
        signUp(){
            this.formcheck()
          if (!this.isSubmit) {
            
            return
          }
          else{  
              let signUpData = {
                'customerId':this.Id,
                'customerPw': this.Pw,
                'customerName': this.Name,
                'gender': this.gender,
                'age': this.age,
                'phone':this.tel,
           }
           axios.post(`${URL.AUTH_URL}/auth/customer`,signUpData)
           .then(res=>{
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
            if(this.Id===""|| (this.Id.length < 3  || this.Id.length > 10)||!this.idcheck){
              this.errorData.Id = "ID는 3자이상 10자 이하여야 합니다."
              isSubmit=false;
              return ;
            }
            else this.errorData.Id = false
             if (this.Pw === "" || (this.Pw.length > 0 && !this.passwordSchema.validate(this.Pw))){
               this.errorData.Pw = "비밀번호는 영문, 숫자포함 8자리 이상이어야 합니다."
               isSubmit=false;
                return ;
             }
            else this.errorData.Pw = false

            if (this.PwConfirm === "" || (this.PwConfirm.length > 0 && this.PwConfirm !== this.Pw))
              {
                  isSubmit=false;
                 this.errorData.PwConfirm = "비밀번호가 일치하지 않습니다."
                return ;
              }
            else {
              this.errorData.PwConfirm = false;
            }
            if(this.gender===""){
              isSubmit=false;
              alert('성별을 입력하세요')
              return ;
            }
            if(this.age===""){
              isSubmit=false;
              alert('나이를 입력하세요')
              return ;
            }
            this.isSubmit=isSubmit;
       },
        IdCheck(){
           axios.get(`${URL.AUTH_URL}/auth/customer/check`,{
            params : {'customerId':`${this.Id}`}
    })
       .then(res=> {
          if(res.data.status=="no"){
              alert("사용가능한 아이디 입니다.")
              this.idcheck=true
              
          }else{
            alert("사용 불가능한 아이디입니다.")
            this.errorData.Id="사용 불가능한 아이디입니다."

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
    },mounted(){
          document.getElementById(1).style.color = "rgb(236,128,116)" ;
        document.getElementById(1).style.borderBottom = "2px solid  rgb(236,128,116)";
        document.getElementById(2).style.color = "black";
    }
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