<template>
  <div class="home">
    <NavDrawer/>
    <CuentaManager :cuenta="cuenta"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CuentaManager from '@/components/CuentaManager.vue'
import NavDrawer from '@/components/NavDrawer.vue'

export default {
  name: 'home',
  components: {
    CuentaManager,
    NavDrawer
  },
  computed: {
    cuenta() {
      return { nombre: 'ahorros', fondos: '100' }
    },
  },
}
</script>
