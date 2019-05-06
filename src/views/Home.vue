<template>
  <div class="home">
    <CuentaManager :cuenta="cuenta" :ingresos="ingresos" :egresos="egresos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CuentaManager from '@/components/CuentaManager.vue'

export default {
  name: 'home',
  components: {
    CuentaManager
  },
  computed: {
    ingresos () {
       return this.$store.state.ingresos;
    },
    egresos () {
       return this.$store.state.egresos;
    },
    cuenta () {
      return {nombre: 'ahorros', fondos: '100'}
    }
  }
}
</script>
