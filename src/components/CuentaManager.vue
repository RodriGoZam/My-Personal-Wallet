<template>
    <v-container fluid class="contenedor">
        <div>
            <v-layout column>
                <h1 class="titulo">{{cuenta.nombre}}</h1>
                <h1 class="saldo">Saldo: {{cuenta.fondos}}</h1>
            </v-layout>
            <Lista  :items = "ingresos" titulo="Ingresos"/>
            <Lista :items = "egresos" titulo="Egresos"/>
            <Herramientas :cuenta="cuenta"/>
        </div>
    </v-container>
</template>
<script>
import Lista from '@/components/Lista.vue'
import Herramientas from '@/components/Herramientas.vue'
export default {
  components: {
    Lista,
    Herramientas,
  },
  props: {
    cuenta: Object
  },
  computed: {
    ingresos() {
      return this.$store.state.ingresos.filter(ingreso=>ingreso.cuenta==this.cuenta.nombre);
    },
    egresos() {
      return this.$store.state.egresos.filter(egreso=>egreso.cuenta==this.cuenta.nombre);
    },
  }
}
</script>
<style scoped>
.contenedor {
    display: inline-block;
}
.titulo {
    font-size: 80;
    text-transform: uppercase;
    text-align: center;
    color: #64C195;
}
.saldo {
    size: 60;
    text-align: right;
     color: #64C195;
}
</style>
