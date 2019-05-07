<template>
<div class="text-xs-center">
    <div>
         <v-btn color="success" dark large @click="addCuenta">Crear Wallet</v-btn>
     </div>
 </div>
</template>

<script>
export default {
    methods: {
        addCuenta() {
            this.$store.dispatch('addCuenta',
            { icon: 'account_balance', text: 'Ahorros', route: '/wallet'})
        }
    }
}
</script>
