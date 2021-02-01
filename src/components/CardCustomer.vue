<template>
  <div>
    <!--    @todo ajustar tamanho padrao para todos-->
    <div class="card_customer" @click="toPageCustomer">

      <img :src="customer.picture.large" class="photo"/>

      <div class="title">
        <strong> {{ customer.name.fullName }} </strong>
        <span class="cep">
         {{ customer.cell }}
        </span>
      </div>
      <section class="text-center items-baseline infos">
        <div>
          {{ cityStateCustomer }}
        </div>
      </section>
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

<style scoped>
.card_customer {
  display: grid;
  grid-template-areas:
  "photo photo"
  "title title"
  "infos infos";
  border-radius: 3px;
  background: rgba(255,255,255,0.50);
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  margin: 16px 8px;
  justify-items: center;
  height: calc(35vh + 8px);
  width: 15vw;
}

.card_customer .photo {
  grid-area: photo;
  width: 85%;
  border-radius: 5px;
  margin: 4px;
  border: 1px solid #e7e7e7;
}

.card_customer .title {
  grid-area: title;
  display: flex;
  flex-direction: column;
  justify-content: left;
}

.card_customer .title .cep {
  display: flex;
  align-self: flex-end;
}

.card_customer .infos {
  grid-area: infos;
}

</style>
