<template>
    <v-container fluid>
        <v-layout column>
            <v-flex xs12>
                    <v-subheader dark class="titulo">{{titulo}}</v-subheader>
                    <v-data-table
                        :headers="cabecerasTabla"
                        :items="items"
                        class="lista"
                        :rows-per-page-items= "paginacionTabla"
                    >
                        <template v-slot:items="props">
                            <td class="text-xs-rigth">{{ props.item.categoria }}</td>
                            <td class="text-xs-rigth">{{ props.item.monto }}</td>
                            <td class="text-xs-rigth">{{ props.item.fecha }}</td>
                        </template>
                    </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  props: {
    items: Array,
    titulo: String,
  },
  data() {
    return {
      cabecerasTabla: [
        { text: 'Categoria',
          align: 'left',
          sortable: false,
          value: 'categoria' },
        { text: 'Monto', value: 'monto' },
        { text: 'Fecha', value: 'fecha' },
      ],
      paginacionTabla: [
        2, 4,
      ],
    }
  },
}
</script>
<style scoped>
.titulo {
    background-color: #64C195;
    width: 100%;
}
.lista {
    height: 200px;
    width: 100%;
    margin-bottom: 10px;
    overflow-y: scroll
}
</style>
