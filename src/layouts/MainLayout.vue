<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view/>
    </q-page-container>

    <Footer></Footer>
  </q-layout>
</template>

<script>

import Footer from 'components/Footer'

export default {
  name: 'MainLayout',
  components: { Footer },
  data () {
    return {}
  }
}
</script>
