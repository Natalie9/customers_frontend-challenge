<template>
  <q-page class="index">
    <TopBar @textSearch="changeNameSearch"></TopBar>
    <section class="index__content">
      <div class="index__filters">
        <Filters @updateFilters="changeRegion"></Filters>
      </div>
      <div>
        <ListCards :customers="customers" :page="page" @changePage="changePage"></ListCards>
      </div>
    </section>


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
      page: {
        current: 1,
        min: 1,
        max: 1,
        limit: 24
      },
      customers: [],
      customersOriginal: [],
      regionSelected: [],
      nameSearch: '',
      spinner: true
    }
  },
  methods: {
    changePage (current) {
      this.page.current = current
      this.update()
    },
    changeRegion (regionSelected) {
      this.regionSelected = regionSelected
    },
    changeNameSearch (nameSearch) {
      this.nameSearch = nameSearch
    },
    updateFilters (regionSelected, text) {
      this.getCustomers()
      // let customersList = this.customersOriginal
      // customersList = this.filterByRegion(regionSelected, customersList)
      // customersList = this.filters(text, customersList)
      // this.customers = customersList
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

    filters (text, customers) {
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
      axios.get('/api/customers', {
        params: {
          limit: this.page.limit,
          page: this.page.current,
          filters: {
            region: this.regionSelected,
            name: this.nameSearch
          }
        }
      }).then(response => {
        let {
          data,
          total
        } = response.data
        this.customersOriginal = data
        this.customers = data
        this.page.max = Math.ceil(total / this.page.limit)

        setTimeout(() => {
          this.$q.loading.hide()
        }, 900)
      }).catch(er => console.log(er))
    },
    update () {
      this.getCustomers()
      this.updateFilters()
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
<style lang="scss">
.index {
  background: #ffc107;

  &__content {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }

  @media (min-width: 500px) {
    &__content {
      grid-template-columns: minmax(300px, auto) 1fr auto;
    }
  }

  &__filters{
    max-height: 15vh;
  }
}

</style>
