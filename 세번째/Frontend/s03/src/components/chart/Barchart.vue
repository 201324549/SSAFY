<script>
import { Bar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    props:['labelinfo'],

    extends: Bar,
    data () {
      return {
        
        datacollection: {
          //Data to be represented on x-axis
          labels: [],
          datasets: [
            {
              label: '재고량',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: []
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              }
            }]
          },
          legend: {
            display: false
          },
          responsive: true, // 그래프 넓이
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
      
    },
    created(){
      console.log(this.labelinfo)
      for(var i = 0; i < this.labelinfo.length; i++){
        this.datacollection.labels.push(this.labelinfo[i].menuName);
        this.datacollection.datasets[0].data.push(this.labelinfo[i].stock);
      }
      
      
    },
      
  }
</script>
<style scoped>
  
</style>