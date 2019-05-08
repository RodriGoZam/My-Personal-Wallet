<template>
    <v-bottom-sheet v-model="sheet">
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
                v-model="tipo"
                >
                </v-combobox>
                <v-text-field
                class="input"
                label="Nombre"
                v-model="nombre"
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
</template>
<script>
export default {
    props: {
        categoriaIngresos: Array,
        categoriaEgresos: Array,
    },
    data () {
        return {
            tiposCategoria: ['Ingreso', 'Egreso'],
            tipo:'',
            nombre:'',
            sheet: false
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

