<script>
export default {
  name: "MyDialog",
};
</script>
<template>
  <q-dialog v-model="showDlg" @show="onShow()">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 600px"
      class="shadow-2 roundedborders bg-white"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>{{ $t("graph.params") }}</q-toolbar-title>
          <q-btn flat round dense icon="close" @click="closeDlg" />
        </q-toolbar>
      </q-header>
      <q-footer class="bg-primary">
        <q-toolbar>
          <q-toolbar-title></q-toolbar-title>
          <q-btn
            :label="$t('graph.cancel')"
            @click="closeDlg()"
            class="q-mr-sm"
          />
          <q-btn :label="$t('graph.save')" @click="submit()" />
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <q-page padding>
          <div class="doc-container q-ma-md">
            <q-field label="A">
              <q-input v-model="form.a" type="Number" />
            </q-field>
            <q-field label="B">
              <q-input v-model="form.b" type="Number" />
            </q-field>
            <q-field label="C">
              <q-input v-model="form.c" type="Number" />
            </q-field>
            <q-field :label="$t('graph.max')">
              <q-input v-model="form.max_value" type="Number" />
            </q-field>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>
<script>
// Импорт используемых компонентов Quasar
import { QInput, QField, QDialog, QFooter } from "quasar";
export default {
  data() {
    return {
      // Поля формы ввода
      form: {
        a: 1,
        b: 1,
        c: 1,
        max_value: 10,
      },
    };
  },
  // Свойства, которые передаются из родительского компонента при его вызове
  props: {
    // Флаг видимости компонента
    showDlg: null,
    // Параметры
    a: null,
    b: null,
    c: null,
    max_value: null,
  },
  methods: {
    // Метод вызывается при каждом показе формы на экране
    onShow: function() {
      this.form.a = this.a;
      this.form.b = this.b;
      this.form.c = this.c;
      this.form.max_value = this.max_value;
    },
    // Обработчик кнопки "Добавить/Редактировать"
    submit: function() {
      this.$emit("setNewValue", this.form);
    },
    // Функция закрытия диалогового окна
    closeDlg: function() {
      // Формирует событие closeEditDlg, которое отслеживает родительский компонент, вызвавший
      // это окно
      this.$emit("closeEditDlg");
    },
  },
  components: { QInput, QField, QDialog, QFooter },
};
</script>
