<template>
  <q-page class="page-layout bg-yellow-2">
    <nav class="navbar_customer" @click="goToHome">
      <img
        style="display: flex"
        alt="Quasar logo"
        src="~assets/logo.svg"
        class="logo q-ma-md"
      >
    </nav>

    <q-page-container class="page-layout container">
      <section class="header-component_customer">
        <img class="photo" :src="customer.picture.large"/>
        <aside class="title">
          <strong class="name">
            {{ customer.name.fullName }}
          </strong>
          <div class="region">
            {{ customer.region }}
          </div>
        </aside>

      </section>


      <section class="content_infos">
        <div class="details_customer">
          <!--        <span>-->
          <!--          <q-icon name="far fa-user" class="text-amber-5 q-mr-sm" size="sm"/>-->
          <!--        {{ genero }}-->
          <!--        </span> -->

          <span>
          <q-icon name="fas fa-gift" class="text-amber-5 q-mr-sm" size="sm"/>
        {{ customer.dob.age }} anos
        </span>
          <span>
            <q-icon name="far fa-calendar-check" class="text-amber-5 q-mr-sm" size="sm"/>
          Cliente há
        {{ customer.registered.age }} anos
        </span>

          <span>
            <q-icon name="email" class="text-amber-5 q-mr-sm" size="sm"/>
        {{ customer.email }}
        </span>

        </div>
        <div class="phones">
          <div>
            <q-icon name="fab fa-whatsapp" class=" q-mr-sm" size="sm"/>
            {{ customer.cell }}
          </div>
          <div>
            <q-icon name="call" class=" q-mr-sm" size="sm"/>
            {{ customer.phone }}
          </div>

        </div>
      </section>

      <section class="content_address">
        <div>
          <q-icon name="fas fa-map-marker-alt" class="text-amber-5 q-mr-sm" size="sm"/>
          {{ customer.location.address }}
          CEP: {{ customer.location.postcode }}
        </div>
        <div>
          {{ cityStateCustomer }}
        </div>
      </section>
    </q-page-container>
  </q-page>
</template>

<script>
import axios from 'axios'
import { QSpinnerFacebook } from 'quasar'
import { toUpperCaseFirstLetters } from 'src/utils'

export default {
  name: 'Customer',
  data () {
    return {
      customer: {}
    }
  },
  methods: {
    getCustomer () {
      this.$q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'yellow',
        spinnerSize: 140,
        backgroundColor: 'black'
      })
      const id = this.$route.params.id
      axios.get('/api/customers/' + id).then(response => {
        console.log(response)
        let data = response.data
        this.customer = data
        setTimeout(() => {
          this.$q.loading.hide()
        }, 1000)
      }).catch(er => console.log(er))
    },
    goToHome () {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    genero () {
      return this.customer.gender === 'female' ? 'Feminino' : 'Masculino'
    },
    cityStateCustomer () {
      const city = toUpperCaseFirstLetters(this.customer.location.city)
      const state = toUpperCaseFirstLetters(this.customer.location.state)
      return `${city} - ${state}`
    }
  },
  created () {
    this.getCustomer()
  }
}
</script>

<style scoped>
.page-layout .container {
  font-size: 1.5em;

  background: #fff;
  height: calc(95vh - 30px);
  margin: 0 auto;
  width: 80vw;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: grid;
  grid-template-areas:
    "photo header"
    "infos infos"
    "address address";
}

.logo {
  height: 30px;
}

.navbar_customer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justfy-content: center;
}

.header-component_customer {
  display: flex;
  align-items: center;
  width: 100%;
  flex: auto 0;
}

.header-component_customer .photo {
  max-width: 30vw;
  min-width: 15vw;
  width: 150px;
  border-radius: 50%;
  grid-area: photo;
  margin-left: 1.8rem;
  border-bottom: 5px #f59a2d dotted;
}

.header-component_customer .title {
  grid-area: header;
  margin-left: 1.2rem;
  flex: auto;
  font-size: 1.5em;
}

.header-component_customer .title .name {
  border-bottom: 3px #f59a2d dotted;
  margin-bottom: 10px;
}

.header-component_customer .title .region {
  margin-top: 10px;
  padding: 2px 10px;
  background: rgba(255, 198, 46, 0.51);
  width: fit-content;
}

.content_infos {
  min-width: 85%;
  margin: 0 auto;
  grid-area: infos;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content_infos .details_customer {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1.8rem;
}


.content_infos .phones {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  margin-right: 1.8em;
}

.content_address {
  grid-area: address;
  display: flex;
  align-self: end;
  padding-bottom: 2rem;
  align-items: center;
  justify-self: center;
  flex-direction: column;
}

</style>
