<template>
  <div class="small" v-if="this.$store.getters.getAuth">
    <my-dialog
      :a="a"
      :b="b"
      :c="c"
      :max_value="max_value"
      :showDlg="showDlg"
      @closeEditDlg="showDlg = false"
      @setNewValue="setParams"
    ></my-dialog>
    <div class="small">
      <div class="fat" align="center"><p>y = a*x*sin(b*x)+c</p></div>
      <div class="inline">
        <p>A = {{ a }}</p>
        <p>B = {{ b }}</p>
        <p>C = {{ c }}</p>
        <p>{{ $t("graph.max") }} = {{ max_value }}</p>
      </div>
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
      <div class="row justify-center">
        <q-btn
          color="primary"
          :label="$t('graph.params')"
          class="q-mlmd"
          align="center"
          @click="showDlg = true"
        ></q-btn>
      </div>
    </div>
  </div>
  <div v-else><UnregisterMenu /></div>
</template>
<script>
// Подключение компонента для отображения диаграммы
import LineChart from "../components/LineCharts.js";
import MyDialog from "../components/Dialog.vue";
import UnregisterMenu from "../components/UnregisteredMenu.vue";
// Подключение компонента QBtn из библиотеки Quasar
import { QBtn } from "quasar";
export default {
  // Описание используемых в шаблоне компонентов
  components: {
    LineChart,
    QBtn,
    MyDialog,
    UnregisterMenu,
  },
  data() {
    return {
      // Данные для диаграммы
      datacollection: null,
      // Настройка параметров диаграммы
      options: null,
      a: 2,
      b: 1,
      c: 1,
      max_value: 10,
      showDlg: false,
    };
  },
  // Заполнение this.datacollection и this.options начальными статическими значениями
  created() {
    this.datacollection = {};
    this.options = {
      responsive: true,
      title: {
        display: true,
        eext: "Line Chart",
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
    setParams(param) {
      this.a = param.a;
      this.b = param.b;
      this.c = param.c;
      this.max_value = param.max_value;
      this.fillData();
      this.showDlg = false;
    },
    // Функция, которая производит заполнение данных случайным образом
    fillData() {
      var dataArray = [];
      var labelsArray = [];

      console.log("---------------------");
      for (var i = 0; i < this.max_value; i += 1) {
        dataArray[i] = this.processFunction(
          parseFloat(this.a),
          parseFloat(this.b),
          parseFloat(this.c),
          parseFloat(i)
        );
        labelsArray[i] = i;
      }
      console.log(this.a);
      console.log(this.b);
      console.log(this.c);
      console.log(this.max_value);

      this.datacollection = {
        labels: labelsArray,
        datasets: [
          {
            label: "Y",
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

  watch: {
    $route(to, from) {
      // обрабатываем изменение параметров маршрута...
      this.fillData();
    },
  },
};
</script>
<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}

.inline {
  display: flex;
  justify-content: space-between;
}

.fat {
  font-size: 25px;
}
</style>
