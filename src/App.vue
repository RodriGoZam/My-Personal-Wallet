<template>
  <v-app class="layout" id="inspire"  >
    <NavDrawer />
    <!--v-content>
      <-router-link > </router-link>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
              </template>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
      <router-view />
    </v-content-->
    <v-container>
      <router-view />
    </v-container>
    <v-footer app fixed>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>

