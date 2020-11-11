<template>
  <div>
    <div class="modal"
      ref="searchWindow"
      :style="searchWindow"
      style="border:1px solid;width:500px;margin:5px 0;position:relative"
    >
      <img
        src="//t1.daumcdn.net/postcode/resource/images/close.png"
        id="btnFoldWrap"
        style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1"
        @click="searchWindow.display = 'none'"
        alt="close"
      >
    </div>
    <input type="text" class="input-text" placeholder="우편번호" v-model="postcode" >
    <input type="button" class="button-text" value="우편번호 찾기" @click="execDaumPostcode" >
    <br>
    <input type="text" class="input-text1" v-model="address" placeholder="주소">
    <br>
    <input type="text" class="input-text1" v-model="extraAddress" ref="extraAddress" placeholder="상세주소">
    <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWindow: {
        display: 'none',
        height: '300px',
      },
      emitdata:{
        postcode:"",
        address: '',
        extraAddress: '',
        bcode:'',
      },
      postcode: '',
      address: '',
      extraAddress: '',
    
    };
  },
  methods: {
    execDaumPostcode() {
      const currentScroll = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
      );
      // eslint-disable-next-line
      new daum.Postcode({
        onComplete: (data) => {
          if (data.userSelectedType === 'R') {
            this.address = data.roadAddress;
          } else {
            this.address = data.jibunAddress;
          }
          if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.extraAddress +=
                this.extraAddress !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            if (this.extraAddress !== '') {
              this.extraAddress = ` (${this.extraAddress})`;
            }
          } else {
            this.extraAddress = '';
          }
          this.postcode = data.zonecode;
          this.$refs.extraAddress.focus();
          this.searchWindow.display = 'none';
          document.body.scrollTop = currentScroll;
          this.emitdata.postcode=this.postcode;
          this.emitdata.address=this.address;
          this.emitdata.extraAddress=this.extraAddress;
          this.emitdata.bcode = data.bcode;
          console.log(data)
          this.$emit('child',this.emitdata)
        },
        onResize: (size) => {
          this.searchWindow.height = `${size.height}px`;
        },
        width: '100%',
        height: '100%',
      }).embed(this.$refs.searchWindow);
      this.searchWindow.display = 'block';
    },
  },
};
</script>
<style scoped>
.input-text{
   display:inline-block;
    width: 70%;
  /* height: 40px; */
  border: 0.8px;
  border-radius: 0;
  padding-left: 10px;
  border-style: none none solid none;
  }
  .input-text1{
    display:inline-block;
   margin-top:15px;
       width: 100%;
  /* height: 40px; */
  border: 0.8px;
  border-radius: 0;
  padding-left: 10px;
  border-style: none none solid none;
  }
  .button-text{
       background-color: rgb(236,128,116);
        border: 0;
        color: white;
        padding: 5px 15px 5px 15px;
        font-size: 1.25rem;
        border-radius: 3px;
        padding: 7px;
  margin-left: 10px;
  width: 20%; 
  outline: none;
  }
  /* @media screen {
    .modal{

    }
    
  } */
</style>