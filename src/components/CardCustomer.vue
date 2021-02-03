<template>
  <div class="card" @click="toPageCustomer">



    <img :src="customer.picture.large" class="card__image"/>
    <div class="card__content">
      <div class="card__title">
        <strong> {{ customer.name.fullName }} </strong>

      </div>
      <span class="cep">
         {{ customer.cell }}
        </span>
      <address class="card__text">
        {{ cityStateCustomer }}
      </address>
    </div>


  </div>

</template>

<script>
import { toUpperCaseFirstLetters } from 'src/utils'

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
  computed: {
    cityStateCustomer () {
      const city = toUpperCaseFirstLetters(this.customer.location.city)
      const state = toUpperCaseFirstLetters(this.customer.location.state)
      return `${city} - ${state}`
    }
  }
}
</script>

<style lang="scss">
.card {
  height: 100%;
  max-height: 300px;
  max-width: 250px;
  min-width: 200px;
  border-radius: 24px;
  box-shadow: -3px 4px 15px 0 rgb(0 0 0 / 10%);
  background-color: var(--white);
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: var(--space-sm) var(--space) var(--space-md);


  &__image {
    border-radius: 24px;
    background-color: #ddd;
    display: block;
    object-fit: cover;
    width: 80%;
    height: 50%;
    margin-bottom: 5px;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--orange);

    &:not(:last-child) {
      margin-bottom: var(--space-xs);
    }

  }

  &__text {
    font-size: 1rem;
    line-height: 2.1rem;
    color: var(--gray)
  }

}

</style>
