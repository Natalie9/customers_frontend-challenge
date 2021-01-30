<template>
  <q-header>
    <q-toolbar class="justify-between q-py-md bg-blue-grey-8">
      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        class="logo q-ma-md"
      >

      <q-input color="teal" rounded  dark filled v-model="text" placeholder="Pesquisar" class="full-width" debounce="600" @input="$emit('textSearch', text)">
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
      </q-input>

      <div class="q-ma-md hideMobyle" id="contatoTopBar">
        Contato
      </div>

    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
.logo {
  width: 8em;
}
</style>
