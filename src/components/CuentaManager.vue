<template>
    <v-container fluid class="contenedor">
        <div>
            <p class="titulo">{{cuenta.nombre}}</p>
            <Lista  :items = "ingresos" titulo="Ingresos"/>
            <Lista :items = "egresos" titulo="Egresos"/>
            <p class="saldo">Saldo: {{cuenta.fondos}}</p>
            <Herramientas/>
        </div>
    </v-container>
</template>
<script>
import Lista from '@/components/Lista.vue'
import Herramientas from '@/components/Herramientas.vue'
export default {
  components: {
    Lista,
    Herramientas
  },
  props: {
    cuenta: Object,
    ingresos: Array,
    egresos: Array
  }
}
</script>
<style scoped>
.contenedor {
    display: inline-block;
}
.titulo {
    size: 36;
    text-transform: uppercase;
    text-align: center;
}
.saldo {
    size: 36;
    text-align: right;
}
</style>
