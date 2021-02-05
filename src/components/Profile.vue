<template>
  <q-page-container>
    <div id="profile">
      <span v-if="this.$store.getters.getAuth">
        <h6>
          {{ $t("profile.login") }}: {{ this.$store.getters.getUsername.name }}
        </h6>
        <h6>
          {{ $t("profile.gender") }}:
          {{ this.$store.getters.getUsername.gender }}
        </h6>
        <h6>
          {{ $t("profile.email") }}: {{ this.$store.getters.getUsername.email }}
        </h6>
        <h6>
          {{ $t("profile.password") }}:
          {{ this.$store.getters.getUsername.password }}
        </h6>
      </span>
      <div align="center">
        <a href="/changeProfile"
          ><q-btn name="Change" :label="$t('profile.change')"
        /></a>
      </div>
    </div>
  </q-page-container>
</template>

<style>
#profile {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
