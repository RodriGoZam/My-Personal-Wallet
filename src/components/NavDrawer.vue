<template>
  <nav>
     <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile  active-class="green--text" v-for="cuenta in cuentas" :key="cuenta.text" router :to="cuenta.route">
          <v-list-tile-action active-class="green--text">
            <v-icon >{{ cuenta.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile>{{ cuenta.text }}</v-list-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="green">
      <v-toolbar-side-icon class="drawerbutton" @click="openDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>Mi Billetera Personal</v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
  export default {
    data: function() {
      return{
         drawer: false,
      }
    },
    methods: {
      openDrawer() {
        if(this.drawer == false)
        {
          this.drawer = true;
        }
        else
        {
          this.drawer = false;
        }
      }
    },
    computed: {
      cuentas() {
        return this.$store.state.cuentas;
      }
    }
    
  }
</script>
