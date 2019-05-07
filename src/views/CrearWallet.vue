<template>
    <v-container>
        <form>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field id="nombre" v-model="nombre" size="large" color="green" label="Nombre de Cuenta" prepend-icon="account_balance"></v-text-field>
                     <v-btn color="success" :disabled="!NombreEsValido" dark large @click.stop="addCuenta()">Crear Wallet</v-btn>
                </v-flex>
            </v-layout>
        </form>
    </v-container>
</template>

<script>
export default {

    data() {
        return{
            nombre: '',
            nombreExiste: false

        }
    },
    computed: {
        cuentas() {
        return this.$store.state.cuentas;
      },
        NombreEsValido() {
            return this.nombre !==''
        }
    },
    methods: {
        addCuenta() {
            for(var i=0; i<this.cuentas.length; i++)
            {
                if(this.nombre == this.cuentas[i].text)
                {
                    console.log('Cuenta ya Existe');
                    this.nombreExiste = true
                    break;
                }
            }
            if( this.nombreExiste == false)
            {
                this.$store.dispatch('addCuenta',
                { icon: 'account_balance', text: this.nombre , route: '/wallet'}
                );
                this.nombre = ''
                console.log('Cuenta Creada')
            }
            this.nombreExiste = false
        }
    }
}
</script>