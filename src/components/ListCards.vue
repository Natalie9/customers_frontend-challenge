<template>
  <q-page class="content">
    <section v-if="customers.length">
      <div class="list_customers">
        <div class="list_customers__item" v-for="customer of customers" :key="customer.email">
          <card-customer :customer="customer"/>
        </div>
      </div>

      <nav class="list_customers__pagination">
        <q-pagination
          color="amber"
          v-model="page.current"
          :max="page.max"
          :min="page.min"
          :direction-links="true"
        />
      </nav>
    </section>
    <section class="empty_list-component" v-else>
      <img
        alt="Sem resultados"
        src="~assets/pixeltrue-seo.svg"
        class="img"
      >
      <span class="text-body1">Desculpe, não foi encontrado nenhum cliente com esse filtro</span>
    </section>

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
    },
    page: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitChanged () {
      this.$emit('changePage', this.page.current)
    }
  },
  watch: {
    'page.current' () {
      this.emitChanged()
    }
  }
}
</script>

<style scoped lang="scss">
.empty_list-component {
  display: flex;
  flex-direction: column;
  align-items:center ;
  justify-content: center;
}

.empty_list-component > img {
  width: 40vw;
}

.pagination-component {
  color: #f59a2d;
  background: #6f42c1;
}

.list_customers {
  justify-items: center;
  background: var(--white);
  min-height: 80vh;
  width: 100%;
  padding: 24px;
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

}

.list_customers__pagination {
  margin: var(--space-md);
  display: flex;
  justify-content: center;
}
</style>
