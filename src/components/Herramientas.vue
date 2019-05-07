<template>
    <v-container fluid>
        <v-layout column>
            <v-flex xs12>
                <div>
                    <v-layout>
                        <v-bottom-sheet>
                            <template v-slot:activator>
                            <v-btn
                                color="#64C195"
                                dark
                                round
                            >
                                +Ingreso
                            </v-btn>
                        </template>
                        <v-list>
                            <p class="text-md-center">Nuevo Ingreso</p>

                        </v-list>
                        </v-bottom-sheet>
                        <!-- <v-btn round>+Ingreso</v-btn>
                        <v-btn round>+Egreso</v-btn>
                        <v-btn round>Transferencia</v-btn>
                        <v-btn round>Reporte</v-btn>
                        <v-btn round>+Categoria</v-btn> -->
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
}
</script>
<style scoped>

</style>
