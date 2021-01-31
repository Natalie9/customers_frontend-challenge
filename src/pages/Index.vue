<template>
  <q-page class="row">
    <TopBar @textSearch="changeNameSearch"></TopBar>
    <div class="col-2 bg-grey-2 q-mx-md">
      <Filters @updateFilters="changeRegion"></Filters>
    </div>
    <div class="col bg-grey-2 q-mx-md">
      <ListCards :customers="customers"></ListCards>
    </div>
  </q-page>
</template>

<script>
import Filters from 'components/Filters'
import ListCards from 'components/ListCards'
import TopBar from 'components/TopBar'

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
      nameSearch: ''
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
      axios.get('/api/customers').then(response => {
        let {
          data,
          total
        } = response.data
        this.customersOriginal = data
        this.customers = data
        console.log({ total })
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
