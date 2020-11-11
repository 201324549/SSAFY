<template>
    <div id="container">
        <div class="main-container" >
                <h1>{{this.CHARTtitle}} </h1>
                            <div>   
                              <ul>
                                <button class="button-group-1" style="background-color:white; width:20%; float:left;" id="1" @click="clicks(1)" >일단위</button>
                                <button class="button-group-1" style="background-color:white; width:20%; float:left;" id="2" @click="clicks(2)" >월단위</button>
                              </ul>
                          </div>
                           <div style="clear:both;"></div>
                <div class="chart">
                <Barchart v-if="isWeek"></Barchart>
                <Barchart v-if="isMonth"></Barchart>
                </div>
        </div>
        <div class="dialog" style="margin-top:100px">
            <h1> 식당 메뉴 분석</h1>
            <h3> 주요타켓층 : {{this.targetAge}}</h3>

        </div>
    </div>

</template>
<script>
import Barchart from '@/components/chart/Barchart.vue'
// import Linechart from '@/components/chart/Linechart.vue'
export default {
    data(){
        return{
            targetAge:"20대",
            isMonth:true,
            isWeek:false,
            CHARTtitle:"일별 매출 현황",
            width:"60%",
            height:"30%"
        }
    },created(){
        
    },
    components:{
        // Linechart,
        Barchart,
    },mounted(){
        document.getElementById(1).style.color = "rgb(236,128,116)" ;
        document.getElementById(1).style.borderBottom = "2px solid  rgb(236,128,116)";
    },
    methods:{
        clicks(num) {
            document.getElementById(num).style.color = " rgb(236,128,116)";
            document.getElementById(num).style.borderBottom = "2px solid rgb(236,128,116)";
            if(num==1){
                 document.getElementById(2).style.color = "black";
                document.getElementById(2).style.border = "0px";
                this.isWeek=true;
                this.isMonth=false;
                this.CHARTtitle="일별 매출 현황";
            }else{
                  document.getElementById(1).style.color = "black";
                document.getElementById(1).style.border = "0px";
                this.isWeek=false;
                this.isMonth=true;
                 this.CHARTtitle="월별 매출 현황";
            }

        }
    }
}
</script>
<style scoped>
    #container{
        margin-left:15%;
    }
    .button-group-1{
     /* display:inline-block; */
     margin-top:2%;
    border:0;
    outline:0;
    background-color:white;
 }
button:focus{
    outline:none !important;
}
.chart{
    width: 1000px;
    height: 500px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}
</style>