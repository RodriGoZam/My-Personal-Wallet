<template>
  <div class="home">
    <CuentaManager :cuenta="cuenta"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CuentaManager from '@/components/CuentaManager.vue'

export default {
  name: 'home',
  components: {
    CuentaManager,
  },
  computed: {
    cuenta() {
      return { nombre: 'ahorros', fondos: '100' }
    },
  },
}
</script>
