<template>
  <q-page class="index">
    <TopBar @textSearch="changeNameSearch"></TopBar>
    <section class="index__content">
      <div class="index__filters">
        <Filters @updateFilters="changeRegion"></Filters>
      </div>
      <div class="index__list">
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
        limit: 10
      },
      customers: [],
      regionSelected: [],
      nameSearch: ''
    }
  },
  methods: {
    changePage (current) {
      this.page.current = current
      this.update()
      window.scrollTo(0, 0)
    },
    changeRegion (regionSelected) {
      this.regionSelected = regionSelected
    },
    changeNameSearch (nameSearch) {
      this.nameSearch = nameSearch
    },
    updateFilters () {
      this.getCustomers()
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

      try {
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
          this.customers = data
          this.page.max = Math.ceil(total / this.page.limit)
        }).catch(er => console.log(er))
      } catch (e) {
        console.log(e)
        this.$q.notify({
          message: 'Erro ao consultar dados',
          color: 'negative',
          position: 'top'
        })
      } finally {
        setTimeout(() => {
          this.$q.loading.hide()
        }, 900)
      }
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
  background: var(--white);
  //font-family: var(--font-family-sans-serif);
  color: var(--gray-dark);

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__list {
    width: 100%;
  }

  @media (min-width: 550px) {
    &__content {
      flex-direction: row;
    }
  }

  &__filters {
    max-height: 15vh;


  }
}

</style>
