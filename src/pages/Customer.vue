<template>
  <q-page class="page-layout bg-amber">


    <nav class="navbar">
      <q-icon name="keyboard_backspace" class="navbar_icon-back" @click="goToHome"></q-icon>
      <div class="navbar_logo">
        <img
          @click="goToHome"
          class="navbar_logo_img"
          alt="Quasar logo"
          src="~assets/logo.svg"
        >
      </div>

    </nav>

    <q-page-container class="customer">
      <section class="customer_picture">
        <img class="customer_picture_photo" :src="customer.picture.large"/>
        <div class="customer_picture_text">
          Cliente há
          <div class="customer_picture_text_years">
            <span class="customer_picture_text_years_number">
            {{ customer.registered.age }}
          </span>
            <span class="customer_picture_text_years_text">anos</span>
          </div>
        </div>
      </section>

      <section class="customer_title">

        <strong class="customer_title_name">
          {{ customer.name.fullName }}
        </strong>

        <div class="customer_title_region">
          {{ customer.region }}
        </div>

      </section>

      <section class="customer_info">

        <section class="customer_info_details">
          <div class="customer_info_details_gender">
            <!--            @todo search how make outilened-->
            <q-icon name="person" class="customer_info_details_icon icon"></q-icon>
            {{ gender }}
          </div>
          <div class="customer_info_details_birthday">
            <q-icon name="card_giftcard" class="customer_info_details_icon icon"></q-icon>
            {{ birthday }}
          </div>
        </section>

        <section class="customer_info_contact">
          <div class="customer_info_contact_phonenumber">
            <div class="customer_info_contact_phonenumber_cell">
              <q-icon name="fab fa-whatsapp" class="customer_info_contact_icon_whatsapp icon"/>
              {{ customer.cell }}
            </div>
            <div class="customer_info_contact_phonenumber_phone">
              <q-icon name="call" class="customer_info_contact_icon_phone icon"/>
              {{ customer.phone }}
            </div>
          </div>

          <div class="customer_info_contact_email">
            <q-icon name="email" class="customer_info_contact_icon_email icon"/>
            {{ customer.email }}
          </div>
        </section>

      </section>
      <section class="customer_address">
        <div class="customer_address_street">
          {{ address }}
          CEP: {{ customer.location.postcode }}
        </div>
        <div class="customer_address_state">{{ cityStateCustomer }}</div>
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
    address () {
      const address = this.customer.location.street.split(' ')
      const number = address[0]
      const street = toUpperCaseFirstLetters(address.slice(1, -1).join(' '))
      return `${street}, ${number}`
    },
    gender () {
      return this.customer.gender === 'female' ? 'Feminino' : 'Masculino'
    },
    birthday () {
      const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
      let data = new Date(this.customer.dob.date)
      let dateFormated = ((data.getDate() + ' de ' + months[(data.getMonth())] + ', ' + data.getFullYear()))
      console.log(dateFormated)
      return dateFormated
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

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-evenly;
  padding: var(--space-sm);

  &_logo {
    display: flex;
    justify-content: center;
    flex-grow: 3;

    &_img {
      width: 30%;
      max-width: 150px;
    }
  }
  &_icon-back {
    font-size: 2rem;
  }
}

.customer {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-sm) var(--space-md);
  border-radius: 5px;
  max-width: 90%;
  margin: 0 auto;
  background: var(--white);
  @media (min-width: 550px) {
    justify-content: space-around;
    padding: 3% 8%;
    max-width: 80%;
  }

}

.customer_picture {
  margin-bottom: var(--space-sm);
  display: flex;
  align-items: center;

  &_photo {
    border-radius: 50%;
    border: 3px solid var(--yellow);
  }

  &_text {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    margin: var(--space-sm);


    &_years {
      font-size: 1rem;
      margin-left: var(--space-sm);
      border-bottom: 2px var(--yellow) dotted;

      &_number {
        font-size: 1.2rem;
      }
    }
  }
}

.customer_title {
  font-size: 1.2em;

  &_region {
    font-size: 1rem;
    padding: 0 var(--space-xs);
    width: fit-content;
    background: var(--yellow-light);
  }
}

.customer_info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;

  &_details {
    &_icon {
      color: var(--yellow-light);
      font-size: 1.2rem;
    }
  }

  &_contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_icon {
      color: var(--yellow-light);
      font-size: 1.2rem;
    }

    &_phonenumber {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }

    @media (min-width: 550px) {
      align-items: flex-start;
    }
  }

  @media (min-width: 550px) {
    margin-top: 5%;
    flex-direction: row;
    justify-content: space-between;
    //align-items: center;
  }
}

.icon{
  color: var(--yellow-light);
  font-size: 1.2rem;
}

.customer_address {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>
