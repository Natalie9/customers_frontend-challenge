<template>
  <q-page class="q-my-lg">
    <div class="row justify-around">
      <div class="col-10 row justify-around" id="listCustomer" v-if="customers.length">
        <div v-for="customer of customers" :key="customer.email" class="col-md-3 col-xs-6 justify-around">
          <card-customer :customer="customer"/>
        </div>
      </div>
      <div class="col-9  row justify-around"  v-else>
        <div>Sorry, without customers whit this filter</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CardCustomer from 'components/CardCustomer'
export default {
  components: { CardCustomer },
  props: {
    customers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
