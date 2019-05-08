<template>
  <v-app class="layout" id="inspire"  >
    <NavDrawer />
    <v-container>
      <router-view />
    </v-container>
    <v-footer app fixed class="light green">
      <span>Certifiacion Project</span>
    </v-footer>
  </v-app>
</template>


<script>
import NavDrawer from './components/NavDrawer.vue'

export default {
  name: 'App',
  components: {
    NavDrawer
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.layout {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>