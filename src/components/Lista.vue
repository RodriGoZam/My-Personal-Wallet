<template>
    <v-container fluid>
        <v-layout column>
            <v-flex xs12>
                    <v-subheader class="titulo">{{titulo}}</v-subheader>
                    <v-list class="lista" two-line>
                        <v-list-tile v-for="item in items" >
                            <v-list-tile-content>
                                <v-list-tile-title>cuenta: {{item.cuenta}} monto: {{item.monto}} categoria: {{item.categoria}}</v-list-tile-title>
                                <v-list-tile-sub-title> {{item.fecha}} </v-list-tile-sub-title>
                            </v-list-tile-content>
                         </v-list-tile>
                    </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  props: {
    items: Array,
    titulo: String
  }
}
</script>
<style scoped>
.titulo {
    background-color: #64C195;
    width: 100%;
}
.lista {
    height: 150px;
    width: 100%;
    overflow-y:scroll;
}
</style>
