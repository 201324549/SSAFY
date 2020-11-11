<template>
  <div>
    <h1>사용가능한 테이블</h1>
    <div v-for="table in tableList" :key="table.tableid">
      <button @click="SelectTable(table.tableNo)">{{ table.tableNo }}</button>
        
    </div>
    
    <hr>
    <div class="left">
      <h2 style="margin-left:30px">Menu</h2>
      <hr>
       <div v-for="(menu,index) in orderList" :key="menu.menuid">
          <div v-if="index % 4 == 1"> 
              <h2 style="margin: 13px 10px 22px 15px;">{{ menu }}</h2>
              <hr>
            
          </div>
      
        </div>
    </div>

   <div class="right">
     <h2 style="margin-left:30px">수량</h2>
     <hr>
      <tr class="tr" v-for="(p) in cart" :key="p.id">
          <td>
            <div class="columns is-multiline is-mobile is-hidden-desktop multilines">
            <div class="column is-half">
              <div class="buttons has-addons">
              <button class="button test" @click="decrement(p.id)"><i  class="fas fa-chevron-left"></i></button>
              <span class="button test" id="value-quantity" style="font-size:20px"> {{p.quantity}}</span>
              <button class="button test" id="increment-number" @click="increment(p.id)"><i class="fas fa-chevron-right"></i></button>
              </div>
              <hr>
            </div>
            </div>
          </td>
          
      </tr> 
   </div>
    
    <div class="footer" @click="result">
        <h1>총액 {{ totalPrice }}원 결제하기 </h1>
    </div>

  
  </div>
</template>

<script>
import axios from 'axios'
import HTTP from "@/util/http-common.js"
export default {
  
  data() {
        return{
          selectTable: 0,
          tableList: [],
          orderList: [],
          ispay : true,
          cart: [
             
          ],
          totalPrice : 0,
        }
    },
    created() {
          axios.get(`${HTTP.AUTH_URL}/auth/customer/byno`,
                {
                    params: {customerNo: 4 }
                }
            ).then(res => {
            this.customer_name = res.data.data.customerName
            })
      
        var storage = localStorage;
        var arr = storage.getItem("orderList");		

        const arr1 = arr.split(",");
        this.orderList = arr1

        for(var i=0; i<this.orderList.length;i++){
          if(i%4 == 0){
            this.cart.push({id:this.orderList[i],quantity:1})
          }
        }
        
        
    // [[storeNo,tableNo,cuNo,inpay],[menuNo,갯수],[menuNo,갯수],[menuNo,갯수],[menuNo,갯수]]


      axios.get(`${HTTP.COMMON_URL}/common/table/byStoreNo`,
            {
                params: {storeNo: 2 }
            }
        ).then(res => {
                for(var i=0; i<res.data.data.length; i++){
                  if (res.data.data[i].empty == true){
                    this.tableList.push(res.data.data[i])
                  }
                }
              
            })
        
        
    },
    mounted(){
      for(var j=0; j<this.orderList.length;j++){
          if(j%4 == 2){
            this.totalPrice = this.totalPrice + (parseInt(this.orderList[j]) * parseInt(this.orderList[j+1]))
          }
        }
    },
    methods: {
      SelectTable(tableno){
        this.selectTable = tableno;
      },
      decrement(id){
        
			this.cart.forEach((item, i) => {
				if (item.id === id) {
          if(this.cart[i].quantity==1){
            alert('최소 1개 이상 주문해 주세요');
          }
          else{
            this.cart[i].quantity -= 1;
            for(var j=0; j<this.orderList.length;j++){
              if(j%4 == 0){
                if(parseInt(this.orderList[j]) == this.cart[i].id){
                this.totalPrice = this.totalPrice - parseInt(this.orderList[j+2])
                console.log(this.totalPrice)
                }
              }
            }
          }
			}
			})
		},
		increment(id) {
		this.cart.forEach((item, i) => {
			if (item.id === id) {
          if(this.cart[i].quantity==5){
            alert('최대 5개까지 주문 가능합니다.');
          }
          else{
            this.cart[i].quantity += 1;
            for(var j=0; j<this.orderList.length;j++){
              if(j%4 == 0){
                if(parseInt(this.orderList[j]) == this.cart[i].id){
                this.totalPrice = this.totalPrice + parseInt(this.orderList[j+2])
                console.log(this.totalPrice)
                }
              }
            }
          }
			}
		});
    },

    result() {
      console.log(this.cart)
      axios.post(`${HTTP.ORDER_URL}/order/order`, 
          {
              "menulist": [
                {
                  "count": 1,
                  "menuNo": 27
                }
              ],
              "order": {
                "customerNo": 4,
                "pay": true,
                "storeNo": 2,
                "tableNo": this.selectTable
              }
          }
      )
           .then(res => {
               console.log(res)

           })
           .catch(err => {
               console.log(err)
            })
    }
    }
  }

</script>

<style scoped>
    .left {
        width: 50%;
        float: left;
        box-sizing: border-box;
        height: 100%;
        border: 0;
        outline: 0;
    
    }
    .right {
        width: 50%;
        float: right;
        box-sizing: border-box;
        height: 100%;
        border: 0;
        outline: 0;
    
    }
    .footer { display:table; position: fixed; height: 100px; bottom: 0; width: 100%; background-color: gray;}
    button {
      background-color: white;
      margin: 13px 10px 10px 15px;
      border: 0;
        outline: 0;
    }
   
</style>