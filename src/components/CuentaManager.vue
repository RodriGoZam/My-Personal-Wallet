<template>
    <v-container fluid class="contenedor">
        <div>
            <v-layout column style="heigth: 10%">
                <h3 class="titulo">{{cuenta.nombre}}</h3>
                <h3 class="saldo">Saldo: {{cuenta.fondos}}</h3>
            </v-layout>
            <Lista  :items = "ingresos" titulo="Ingresos" style="heigth: 10%"/>
            <Lista :items = "egresos" titulo="Egresos" height="15%"/>
            <Herramientas :cuenta="cuenta" height="25%"/>
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
    text-transform: uppercase;
    text-align: center;
    color: #64C195;
}
.saldo {
    text-align: right;
     color: #64C195;
     width: 80%;
     margin-left: 10%; 
}
</style>
