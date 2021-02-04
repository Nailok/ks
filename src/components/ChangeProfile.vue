<template>
  <div id="register">
    <form class="change" @submit.prevent="change">
      <h4>Change personal data</h4>
      <label>New email</label>
      <div>
        <input
          id="email"
          required
          v-model="email"
          type="email"
          placeholder="Name"
        /><br />
      </div>
      <div>
        <label>New password</label>
      </div>
      <div>
        <input
          required
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <label for="password-confirm">password_confirmation</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          placeholder="Password confirmation"
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
      } else this.errors = "Passwords are not equal";
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
