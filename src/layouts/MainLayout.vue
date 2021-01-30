<template>
  <q-layout view="lHh Lpr lFf">
    <TopBar></TopBar>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <Footer></Footer>
  </q-layout>
</template>

<script>
import TopBar from 'components/TopBar'
import Footer from 'components/Footer'

export default {
  name: 'MainLayout',
  components: { Footer, TopBar },
  data () {
    return {}
  }
}
</script>
