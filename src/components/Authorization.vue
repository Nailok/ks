<template>
  <div>
    <div id="login">
      <h1>{{ $t("auth.header") }}</h1>
      <input
        required
        v-model="email"
        type="email"
        :placeholder="$t('auth.email')"
      />
      <input
        required
        type="password"
        v-model="password"
        :placeholder="$t('auth.password')"
      />
      <button type="button" v-on:click="login()">{{ $t("auth.enter") }}</button>
      <span v-if="this.errors != ''">
        <br />
        {{ this.errors }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      if (
        this.$store.getters.getUsername.email == email &&
        this.$store.getters.getUsername.password == password
      ) {
        this.$store
          .dispatch("setAuth")
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      } else if (typeof this.$store.getters.getUsername.email == "undefined") {
        this.errors = "error getting email";
      } else {
        this.errors = "Wrong email/password";
      }
    },
  },
};
</script>
<style>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
