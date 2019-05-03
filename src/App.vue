<template>
  <v-app id="inspire" dark>
    <NavDrawer />
    <v-content>
      <router-link> </router-link>
    </v-content>
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
