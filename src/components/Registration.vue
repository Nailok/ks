<template>
  <div id="register">
    <h2>Registration</h2>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>

      <label for="email">email </label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>

      <label for="gender" type="text">gender </label>
      <div>
        <!-- <select name="gender" id="gender" v-model="gender">
          <option>Male</option>
          <option>Female</option>
        </select> -->

        <input type="radio" id="male" value="Male" v-model="gender" />
        <label for="male">Male</label>
        <br />
        <input type="radio" id="female" value="Female" v-model="gender" />
        <label for="female">Female</label>
        <br />
      </div>

      <label for="password"> password </label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>
      <label for="password-confirm">password_confirmation</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div>

      <div>
        <button type="submit">Register</button>
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
