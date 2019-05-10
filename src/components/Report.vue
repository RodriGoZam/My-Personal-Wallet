<template>
  <div id="report">
    <br>
    <v-layout row wrap justify-center class="layout">
      <v-subheader dark>Reporte</v-subheader>
      <v-flex xs3>
        <v-select
          :items="categorias"
          label="Categoria"
          @change="filtrarCategoria"
        ></v-select>
      </v-flex>
      <v-flex xs3>
        <v-menu
          ref="show_start_date"
          :close-on-content-click="false"
          v-model="show_start_date"
          :nudge-right="40"
          :return-value.sync="start_date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="start_date"
            label="From"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="start_date" @input="filtrarFechaInicio"></v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs3>
        <v-menu
          ref="show_end_date"
          :close-on-content-click="false"
          v-model="show_end_date"
          :nudge-right="40"
          :return-value.sync="end_date"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
          >
          <v-text-field
            slot="activator"
            v-model="end_date"
            label="To"
            prepend-icon="event"
            readonly
          ></v-text-field>
          <v-date-picker v-model="end_date" @input="filtrarFechaFin"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <br>
    <v-data-table
      v-model="selected"
      :headers="headers" 
      :items="registro"
      :pagination.sync="pagination"
      select-all
      class="elevation-1"
      :rows-per-page-items="[-1]"
      :hide-actions=true
      :search="filters"
      :custom-filter="customFilter"
      >
      <template slot="headers" slot-scope="props">
        <tr>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
            >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>{{ props.item.cuenta }}</td>
          <td class="text-xs-right">{{ props.item.fecha }}</td>
          <td class="text-xs-right">{{ props.item.categoria }}</td>
          <td class="text-xs-right">{{ props.item.monto }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Cuenta', align: 'left', sortable: false, value: 'cuenta' },
        { text: 'Fecha', align: 'left', sortable: true, value: 'fecha' },
        { text: 'Categoria', align: 'left', sortable: true, value: 'categoria' },
        { text: 'Monto', align: 'left', sortable: false, value: 'monto' },
      ],
      show_start_date: false,
      start_date: null,
      show_end_date: false,
      end_date: null,
      selected: [],
      pagination: {
        sortBy: 'cuenta'
      },
      filters: {
        category: '',
        start_date: null,
        end_date: null
      }
    }
  },
  computed: {
    registro () {
      return this.$store.getters.hacerReporte
    },
    categorias () {
      var cat = this.$store.getters.obtenerCategorias
      console.log(cat)
      return cat
    }
  },
  methods: {
    customFilter (items, filters, filter, headers) {
      const cfilter = new this.$MultiFilters(items, filters, filter, headers)

      cfilter.registerFilter('category', function (category, items) {
        if (category.trim() === '') return items

        return items.filter(item => {
          return item.categoria === category
        }, category)
      })
      cfilter.registerFilter('start_date', function (start_date, items) {
        if (start_date === null) return items

        return items.filter(item => {
          return item.fecha >= start_date
        }, start_date)
      })
      cfilter.registerFilter('end_date', function (end_date, items) {
        if (end_date === null) return items

        return items.filter(item => {
          return item.fecha <= end_date
        }, end_date)
      })
      return cfilter.runFilters()
    },
    filtrarCategoria (val) {
      this.filters = this.$MultiFilters.updateFilters(this.filters, {category: val})
    },
    filtrarFechaInicio (val) {
      this.$refs.show_start_date.save(val)
      const timestamp = new Date(val).getTime()
      console.log(timestamp)
      this.filters = this.$MultiFilters.updateFilters(this.filters, {start_date: timestamp})
    },
    filtrarFechaFin (val) {
      this.$refs.show_end_date.save(val)
      const timestamp = new Date(val).getTime()
      console.log(timestamp)
      this.filters = this.$MultiFilters.updateFilters(this.filters, {end_date: timestamp});
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  },
  filters: {
    formatDate: function (value) {
      if (!value) return '';
      return new Date(value).toLocaleDateString('es-ES');
    }
  }
}
</script>

<style scoped>
.layout  {
  color: #64C195;
  background-color: #64C195
}
</style>
