<template>
  <div class="">
    <q-card class="column flex q-pt-sm  q-ma-sm bg-grey-2 cardCustomer" flat>

      <q-img
        :src="customer.picture.large"
        basic
        style="width: 70%"
        class="self-center"
      >

        <div class="absolute-bottom">
          {{ fullNameCustomer }}
        </div>

      </q-img>

      <q-card-section class="text-center items-baseline">
        <span class="text-weight-bolder">
          {{ fullNameCustomer }}
        </span>
        <div class="desktop-only">
          {{ streetCustomer }}
        </div>
        <div>
          {{ cityStatePostcodeCustomer }}
        </div>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'CardCustomer',
  props: {
    customer: {
      type: Object
    }
  },
  methods: {
    toUpperCaseFirstLetters (phrase) {
      return phrase.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
    }
  },
  computed: {
    fullNameCustomer () {
      const first = this.toUpperCaseFirstLetters(this.customer.name.first)
      const last = this.toUpperCaseFirstLetters(this.customer.name.last)
      return (`${first} ${last}`)
    },
    streetCustomer () {
      const address = this.customer.location.street.split(' ')
      const number = address[0]
      const street = this.toUpperCaseFirstLetters(address.slice(1, -1).join(' '))
      return `${street}, ${number}`
    },
    cityStatePostcodeCustomer () {
      const city = this.toUpperCaseFirstLetters(this.customer.location.city)
      const state = this.toUpperCaseFirstLetters(this.customer.location.state)
      const cep = this.customer.location.postcode
      return `${city} ${state} - CEP ${cep}`
    }
  }
}
</script>

<style scoped>
@media (max-width: 500px) {
  .cardCustomer {
    min-height: 34vh;
  }
}

@media (min-height: 1400px) {
  .cardCustomer {
    min-height: 40vh;
  }
}
</style>
