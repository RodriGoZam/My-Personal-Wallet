<template>
  <v-app id="inspire" dark>
    <v-content>
      <NavDrawer/>
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
      //
    }
  }
}
</script>
