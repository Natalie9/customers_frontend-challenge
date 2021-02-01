<template>
  <div class="">
    <q-card class="column flex q-pt-sm  q-ma-sm bg-grey-2 cardCustomer" flat @click="toPageCustomer">

      <q-img
        :src="customer.picture.large"
        basic
        style="width: 70%"
        class="self-center"
      >

        <div class="absolute-bottom">
          {{ customer.name.fullName }}
        </div>

      </q-img>

      <q-card-section class="text-center items-baseline">
        <span class="text-weight-bolder">
          {{ customer.name.fullName }}
        </span>
        <div class="desktop-only">
          {{ customer.location.address }}
        </div>
        <div>
          {{ customer.location.fullAddress }}
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
    toPageCustomer () {
      this.$router.push({
        name: 'CustomerPage',
        params: { id: this.customer.id }
      })
    }
  },
  computed: {}
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
