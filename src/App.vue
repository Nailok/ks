<template>
  <q-layout view="lhh lpr lff">
    <q-header elevated class="glossy">
      <q-bar class="bg-black text-white">
        <q-toolbar-title>Vue.js Graph </q-toolbar-title>

        <span v-if="this.$store.getters.getAuth">
          {{ this.$store.getters.getUsername.name }}
          <a href="/"
            ><q-btn name="Home" color="Primary" :label="$t('head.home')"
          /></a>
          <a href="/profile"
            ><q-btn
              name="profile"
              color="Primary"
              :label="$t('head.profile')"
            ></q-btn
          ></a>
          <a @click="logout"
            ><q-btn name="LogOut" color="Primary" :label="$t('head.logout')"
          /></a>
        </span>
        <span v-else>
          <a href="/login"
            ><q-btn name="Login" color="Primary" :label="$t('head.login')"
          /></a>
          <a href="/register"
            ><q-btn name="SignIn" color="Primary" :label="$t('head.signin')"
          /></a>
        </span>

        <!-- <q-btn color="accent" label="language">
          <q-menu fit>
            <q-list>
              <q-item clickable>
                <q-btn color="primary" label="en" @click="changeToEn()"></q-btn>
              </q-item>
              <q-item clickable>
                <q-btn color="primary" label="ru" @click="changeToRu()"></q-btn>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn> -->
      </q-bar>
    </q-header>

    <q-page-container>
      <div id="app">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  methods: {
    logout() {
      this.$store.dispatch("unsetStorage").then(() => {
        this.$router.push("/login");
      });
    },
    // changeToEn() {
    //   this.$store.dispatch('setLang', 'en')
    //   location.reload()
    // },
    // changeToRu(){
    //   this.$store.dispatch('setLang', 'ru')
    //   location.reload()
    // }
  },
};
</script>

<style></style>
