<template>
  <v-app id="inspire" dark>
    <NavDrawer />
    <v-content>
      <router-link> </router-link>
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
    </v-content>
    <v-footer app fixed>
      <span>Certifiacion Project</span>
    </v-footer>
  </v-app>
</template>


<script>
import NavDrawer from './components/NavDrawer'

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
