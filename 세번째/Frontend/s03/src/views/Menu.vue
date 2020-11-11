<template>
  <div class="flex">
      <div class="d1">
          <div class="d-flex d3">
              <div style="float: left">
                  <span class="ml-3 sf">상품</span>
              </div>
          </div>
          <div id="tabs" class="d4">
              <button class="px-3 b1" v-for="(tab, index) in tabs" :key="index"
              v-bind:class="{active: currentTab === index}"
              v-on:click="currentTab = index"
              style="height: 40px"> <a href="#" class="button">{{tab}}</a> </button>
          </div>
          <div class="tab-content">
              <div v-show="currentTab==0">tab content1</div>
              <div v-show="currentTab==1">tab content2</div>
              <div v-show="currentTab==2">tab content3</div>
              <div v-show="currentTab==3">tab content4</div>
              <div v-show="currentTab==4">tab content5</div>
              <div v-show="currentTab==5">tab content6</div>
          </div>
        
      </div>
      <div class="d2">
         <div class="d5">
             <div class="left">
                 <p>총액 : </p>
             </div>
             <div class="right">
                 <button class="b11">주문하기</button>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "#tabs",
    data() {
        return{
            currentTab : 0,
            tabs: ['tab title1', 'tab title2', 'tab title3', 'tab title4', 'tab title5', 'tab title6']
        }
    },
     methods: {
        
     }
}
</script>

<style>
.flex{
    display: flex;
}
.d1{
  
   height: 600px;
   width: 1000px;
  
}
.d2{
    position: relative;
   background-color: white;
   height: 560px;
   width: 400px;
   border: 1px solid gold

}
.d3{
   
    height: 50px;
    
}
.b11{
    width: 100%;
    height: 80ox;
}
.d4{
   
    height: 50px;
  
}
.d5{
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80px;
    width: 100%;
    background-color: white;
}
.left{
    height: 80px;
    width: 70%;
    float: left;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid gold
}
.right{
    height: 80px;
    width: 30%;
    float: right;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid gold
}
.sf{
    font-size: 25px;
    color: black;
}

a {
	-webkit-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-moz-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-ms-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	-o-transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	transition: all 200ms cubic-bezier(0.390, 0.500, 0.150, 1.360);
	display: block;
	
	max-width: 90px;
    height: 40px;
	text-decoration: none;
	border-radius: 4px;

}

a.button {
	color: rgba(30, 22, 54, 0.6);
	box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
}

a.button:hover {
	color: rgba(255, 255, 255, 0.85);
	box-shadow: rgba(30, 22, 54, 0.7) 0 0px 0px 40px inset;
    text-decoration: none;
}

a.button2 {
	color: rgba(30, 22, 54, 0.6);
	box-shadow: rgba(30, 22, 54, 0.4) 0 0px 0px 2px inset;
}

a.button2:hover {
	color: rgba(255, 255, 255, 0.85);
	box-shadow: rgba(30, 22, 54, 0.7) 0 80px 0px 2px inset;
    text-decoration: none;
}

.b1 {
    border: 0;
    outline: 0;
    background-color: white;
    height: 100px;
    width: 150px;
}

</style>