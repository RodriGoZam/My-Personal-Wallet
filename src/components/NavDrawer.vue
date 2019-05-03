<template>
  <nav>
     <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon >{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile>{{ link.text }}</v-list-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>My Personal Wallet</v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
  export default {
    data() {
      return{
         drawer: false,
         links: [
          { icon: 'home', text: 'Home', route: '/'},
          { icon: 'person', text: 'My Wallet', route: '/wallet'},
       ]
      }
    }  
  }
</script>