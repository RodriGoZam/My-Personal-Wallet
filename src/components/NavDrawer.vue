<template>
  <nav>
     <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile active-class="green--text" v-for="cuenta in cuentas" :key="cuenta.nombre"
         router :to="cuenta.route">
          <v-list-tile-action active-class="green--text">
            <v-icon >{{ cuenta.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content  @click="actualizarHomeData(cuenta)">
            <v-list-tile>{{ cuenta.nombre }}</v-list-tile>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn
      color="#64C195"
      dark
      round
      id="botonReporte"
      @click="$router.push('crear')"
      >+cuenta
      </v-btn>
    </v-navigation-drawer>
    <v-toolbar dark app fixed clipped-left color="#64C195">
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
    watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
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
      },
      actualizarHomeData (cuenta) {
        this.$emit('actualizarCuenta', cuenta)
      }
    },
    computed: {
      cuentas() {
        return this.$store.state.cuentas;
      }
    }
    
  }
</script>
