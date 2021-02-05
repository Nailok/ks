<template>
  <div id="register">
    <h2>{{ $t("reg.register") }}</h2>
    <form @submit.prevent="register">
      <label for="name">{{ $t("reg.login") }}</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>

      <label for="email">{{ $t("reg.email") }} </label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>

      <label for="gender" type="text">{{ $t("reg.gender") }} </label>
      <div>
        <!-- <select name="gender" id="gender" v-model="gender">
          <option>Male</option>
          <option>Female</option>
        </select> -->

        <input type="radio" id="male" value="Male" v-model="gender" />
        <label for="male">{{ $t("reg.male") }}</label>
        <br />
        <input type="radio" id="female" value="Female" v-model="gender" />
        <label for="female">{{ $t("reg.female") }}</label>
        <br />
      </div>

      <label for="password"> {{ $t("reg.password") }} </label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>
      <label for="password-confirm">{{ $t("reg.password_confirm") }}</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>

      <div>
        <button type="submit">{{ $t("reg.toReg") }}</button>
      </div>
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      gender: "",
      errors: "",
    };
  },
  methods: {
    register: function() {
      if (this.password_confirmation == this.password) {
        let data = {
          name: this.name,
          email: this.email,
          gender: this.gender,
          password: this.password,
          country: this.country,
        };

        this.$store
          .dispatch("setUsername", data)
          .then(() => this.$router.push("/"))
          .catch((err) => console.log(err));
      } else this.errors = this.$t("reg.pass_err");
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
