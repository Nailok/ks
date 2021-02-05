<template>
  <div id="register">
    <form class="change" @submit.prevent="change">
      <h4>{{ $t("edit.header") }}</h4>
      <label>{{ $t("edit.email") }}</label>
      <div>
        <input
          id="email"
          required
          v-model="email"
          type="email"
          :placeholder="$t('edit.email')"
        /><br />
      </div>
      <div>
        <label>{{ $t("edit.password") }}</label>
      </div>
      <div>
        <input
          required
          v-model="password"
          type="password"
          :placeholder="$t('edit.password')"
        />
      </div>
      <label for="password-confirm">{{ $t("edit.password_confirm") }}</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          :placeholder="$t('edit.password_confirm')"
          required
        />
      </div>
      <q-btn color="primary" label="Save" @click="change()"></q-btn>

      <span v-if="this.errors != ''">
        <br />
        {{ this.errors }}
      </span>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      errors: "",
    };
  },
  methods: {
    change() {
      let newUsr = this.$store.getters.getUsername;
      if (this.password_confirmation == this.password) {
        if (this.email != "") {
          let email = this.email;
          newUsr.email = email;
        }
        if (this.password != "") {
          let password = this.password;
          newUsr.password = password;
        }
        this.$store
          .dispatch("setUsername", newUsr)
          .then(() => this.$router.push("/profile"))
          .catch((err) => console.log(err));
      } else this.errors = this.$t("edit.pass_err");
    },
  },
};
</script>

<style>
#register {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
