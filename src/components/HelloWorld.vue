<template>
  <div class="small">
    <!-- Вывод диаграммы.
datacollection - данные для диаграммы,
options - параметры отображения диаграммы
 -->
    <div class="q-gutter-md" style="max-width: 300px" align="center">
      <q-input
        outlined
        v-model="a_value"
        label="A"
        type="Number"
        @input="fillData()"
      />
      <q-input
        outlined
        v-model="b_value"
        label="B"
        type="Number"
        @input="fillData()"
      />
      <q-input
        outlined
        v-model="c_value"
        label="C"
        type="Number"
        @input="fillData()"
      />

      <q-input
        outlined
        v-model="max_value"
        label="max"
        type="Number"
        @input="fillData()"
      />
    </div>

    <line-chart :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>
<script>
// Подключение компонента для отображения диаграммы
import LineChart from "../components/LineCharts.js";
// Подключение компонента QBtn из библиотеки Quasar
export default {
  // Описание используемых в шаблоне компонентов
  components: {
    LineChart,
  },
  data() {
    return {
      // Данные для диаграммы
      datacollection: null,
      // Настройка параметров диаграммы
      options: null,
      a_value: 1,
      b_value: 1,
      c_value: 1,
      max_value: 10,
    };
  },
  // Заполнение this.datacollection и this.options начальными статическими значениями
  created() {
    this.datacollection = {};
    this.options = {
      responsive: true,
      title: {
        display: true,
        text: "Line Chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "X",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Y",
            },
          },
        ],
      },
    };
  },
  mounted() {
    // Заполнение данных с помощью функции fillData
    this.fillData();
  },
  methods: {
    // Функция, которая производит заполнение данных случайным образом
    fillData() {
      var dataArray = [];
      var labelsArray = [];

      console.log("---------------------");
      for (var i = 0; i < this.max_value; i += 1) {
        dataArray[i] = this.processFunction(
          parseFloat(this.a_value),
          parseFloat(this.b_value),
          parseFloat(this.c_value),
          i
        );
        console.log(dataArray[i]);
        labelsArray[i] = i;
      }

      this.datacollection = {
        labels: labelsArray,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#F00",
            borderColor: "#F00",
            data: dataArray,
            fill: false,
          },
        ],
      };
    },
    processFunction(a, b, c, x) {
      return a * x * Math.sin(b * x) + c;
    },
  },
};
</script>
<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
