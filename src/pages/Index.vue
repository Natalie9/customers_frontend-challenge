<template>
  <q-page class="row q-py-md">
    <TopBar @textSearch="changeNameSearch"></TopBar>

    <div class="col-2 bg-amber-1 q-mx-md">

      <Filters @updateFilters="changeRegion"></Filters>
    </div>
    <div class="col bg-amber-1 q-mx-md">
      <ListCards :customers="customers"></ListCards>
    </div>

  </q-page>
</template>

<script>
import Filters from 'components/Filters'
import ListCards from 'components/ListCards'
import TopBar from 'components/TopBar'
import { QSpinnerFacebook } from 'quasar'
import { normalizeString } from 'src/utils'
import axios from 'axios'

export default {
  name: 'PageIndex',
  components: {
    ListCards,
    Filters,
    TopBar
  },
  data () {
    return {
      customers: [],
      customersOriginal: [],
      regionSelected: [],
      nameSearch: '',
      spinner: true
    }
  },
  methods: {
    changeRegion (regionSelected) {
      this.regionSelected = regionSelected
    },
    changeNameSearch (nameSearch) {
      this.nameSearch = nameSearch
    },
    updateFilters (regionSelected, text) {
      let customersList = this.customersOriginal
      customersList = this.filterByRegion(regionSelected, customersList)
      customersList = this.searchByCustomerName(text, customersList)
      this.customers = customersList
    },

    filterByRegion (regionSelected, customers) {
      if (regionSelected.length) {
        return customers.filter(ct => {
          return regionSelected.includes(ct.region)
        })
      } else {
        return customers
      }
    },

    searchByCustomerName (text, customers) {
      if (text.length) {
        return customers.filter(ct => {
          let name = normalizeString(ct.name.first + ' ' + ct.name.last)
          text = normalizeString(text)
          return name.includes(text)
        })
      } else {
        return customers
      }
    },

    async getCustomers () {
      this.$q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'yellow',
        spinnerSize: 140,
        backgroundColor: 'black'
      })
      axios.get('/api/customers').then(response => {
        let {
          data,
          total
        } = response.data
        this.customersOriginal = data
        this.customers = data
        console.log({
          data,
          total
        })
        setTimeout(() => {
          this.$q.loading.hide()
        }, 900)
      }).catch(er => console.log(er))
    }
  },
  created () {
    this.getCustomers()
  },
  watch: {
    nameSearch () {
      this.updateFilters(this.regionSelected, this.nameSearch)
    },
    regionSelected () {
      this.updateFilters(this.regionSelected, this.nameSearch)
    }
  }
}
</script>
