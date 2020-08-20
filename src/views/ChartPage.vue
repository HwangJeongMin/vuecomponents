<script>
import { Line } from 'vue-chartjs';
//Getting the reactiveProp mixin from the mixins module.
export default {
  type: 'line',
  extends: Line,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        datasets: [
          {
            label: '콜/유입 수',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#4bc0c0',
            pointBackgroundColor: 'white',
            borderWidth: 3,
            pointBorderWidth: 2,
            pointBorderColor: '#cfcfcf',
            fill: true,
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
          },
          {
            label: '콜/유입 수2',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#48e22c',
            pointBackgroundColor: 'white',
            borderWidth: 3,
            pointBorderWidth: 2,
            pointBorderColor: '#cfcfcf',
            fill: true,
            //Data to be represented on y-axis
            data: [10, 40, 20, 70, 50, 70, 40, 10, 30, 80, 50, 40],
          },
        ],
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  },
};
</script>

<style></style>
