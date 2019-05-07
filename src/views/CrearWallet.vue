<template>
    <v-container>
        <form>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field id="nombre" v-model="nombre" size="large" color="green" label="Nombre de Cuenta" prepend-icon="account_balance"></v-text-field>
                     <v-btn color="success" :disabled="!NombreEsValido" dark large @click="addCuenta()">Crear Wallet</v-btn>
                </v-flex>
            </v-layout>
        </form>
    </v-container>
</template>

<script>
export default {

    data() {
        return{
            nombre: ''
        }
    },
    computed: {
        NombreEsValido() {
            return this.nombre !==''
        }
    },
    methods: {
        addCuenta() {
            this.$store.dispatch('addCuenta',
             { icon: 'account_balance', text: this.nombre , route: '/wallet'}
            );
            this.nombre = ''
        }
    }
}
</script>