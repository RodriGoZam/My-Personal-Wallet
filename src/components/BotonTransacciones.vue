<template>
    <v-bottom-sheet v-model="sheet">
                            <template v-slot:activator>
                            <v-btn
                                color="#64C195"
                                dark
                                round
                            >
                                +{{tipo}}
                            </v-btn>
                            </template>
                            <v-list>
                                <p class="text-md-center">Nuevo {{tipo}}</p>
                                <v-layout column>
                                    <v-combobox
                                    :items="categorias"
                                    label="Seleccione una categoria"
                                    chips
                                    autofocus
                                    type="button"
                                    class="seleccion"
                                    v-model="categoria"
                                    >
                                    </v-combobox>
                                    <v-text-field
                                    class="input"
                                    label="Monto"
                                    type="number"
                                    v-model="monto"
                                    ></v-text-field>
                                    <v-menu
                                    ref="menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="fecha"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="fecha"
                                            label="Picker in menu"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                        ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="fecha" no-title scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="$refs.menu.save(fecha)">OK</v-btn>
                                        </v-date-picker>
                                    </v-menu>
                                    <v-btn
                                    color="#64C195"
                                    dark
                                    round
                                    class="input"
                                    @click="sheet = false"
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
        tipo: String,
        categorias: Array
    },
    data () {
        return {
            sheet: false,
            fecha: new Date().toISOString().substr(0, 10),
            categoria: undefined,
            monto: undefined
        }
    },
    methods: {
        agregar () {
            switch (tipo) {
                
            }
        }
    } 
}
</script>
<style scoped>
.calendario {
    width: 30%;
    margin-left: 35%;
}
</style>
