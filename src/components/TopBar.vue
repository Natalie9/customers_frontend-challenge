<template>
  <q-header>
    <q-toolbar class="justify-between q-py-md bg-amber-4">
      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        class="logo q-ma-md"
      >

      <q-input color="teal" rounded  filled v-model="text" placeholder="Pesquisar" class="full-width" debounce="600" @input="$emit('textSearch', text)">
        <template v-slot:prepend>
          <q-icon name="search"/>
        </template>
      </q-input>

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
