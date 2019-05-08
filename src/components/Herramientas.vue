<template>
    <v-container fluid>
        <v-layout column>
            <v-flex xs12>
                <div>
                    <v-layout>
                        <BotonTransacciones tipo="Ingreso" :categorias="categoriaIngresos"/>
                        <BotonTransacciones tipo="Egreso" :categorias="categoriaEgresos"/>
                        <v-bottom-sheet v-model="sheetTransferencia">
                            <template v-slot:activator>
                            <v-btn
                                color="#64C195"
                                dark
                                round
                                id="botonTransferencia"
                            >
                                Transferencia
                            </v-btn>
                            </template>
                            <v-list>
                                <p class="text-md-center">Nueva Transferencia</p>
                                <v-layout column>
                                    <v-combobox
                                    :items="otrasCuentas"
                                    label="Seleccione la cuenta destinada"
                                    chips
                                    autofocus
                                    type="button"
                                    class="seleccion"
                                    >
                                    </v-combobox>
                                    <v-text-field
                                    class="input"
                                    label="Monto"
                                    type="number"
                                    ></v-text-field>
                                    <v-btn
                                    color="#64C195"
                                    dark
                                    round
                                    class="input"
                                    id="AgregarTransferencia"
                                    @click="sheetTransferencia = false"
                                    >
                                    Enviar
                                    </v-btn>
                                </v-layout>
                            </v-list>
                        </v-bottom-sheet>
                        <v-btn
                                color="#64C195"
                                dark
                                round
                                id="botonReporte"
                        >
                                Reporte
                        </v-btn>
                        <v-bottom-sheet v-model="sheetCategoria">
                            <template v-slot:activator>
                            <v-btn
                                color="#64C195"
                                dark
                                round
                                id="botonCategoria"
                            >
                                +Categoria
                            </v-btn>
                            </template>
                            <v-list>
                                <p class="text-md-center">Nueva Categoria</p>
                                <v-layout column>
                                    <v-combobox
                                    :items= "this.tiposCategoria"
                                    label="Seleccione el tipo de categoria"
                                    chips
                                    autofocus
                                    type="button"
                                    class="seleccion"
                                    >
                                    </v-combobox>
                                    <v-text-field
                                    class="input"
                                    label="Nombre"
                                    ></v-text-field>
                                    <v-btn
                                    color="#64C195"
                                    dark
                                    round
                                    class="input"
                                    id="AgregarCategoria"
                                    @click="sheetCategoria = false"
                                    >
                                    Agregar
                                    </v-btn>
                                </v-layout>
                            </v-list>
                        </v-bottom-sheet>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import BotonTransacciones from '@/components/BotonTransacciones.vue'
export default {
    components: {
        BotonTransacciones
    },
    props: {
        cuenta: Object
    },
    computed: {
        categoriaIngresos () {
            return this.$store.state.categoriaIngresos
        },
        categoriaEgresos () {
            return this.$store.state.categoriaEgresos
        },
        otrasCuentas () {
            return this.$store.state.cuentas.filter(cuenta=>cuenta.nombre!=this.cuenta.nombre).map(function(i) {
                    return i.nombre;
                    })
        }
    },
    data () {
        return {
         tiposCategoria: ['Ingreso', 'Egreso'],
         sheetIngreso: false,
         sheetEgreso: false,
         sheetTransferencia: false,
         sheetCategoria: false
        }
    },
    methods: {
        agragarIngreso (categoria, Monto) {

        }
    }
}
</script>
<style scoped>
.seleccion {
    width: 80%;
    margin-left: 10%;
}
.input {
    width: 30%;
    margin-left: 35%;
}
</style>
