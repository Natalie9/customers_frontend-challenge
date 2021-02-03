<template>
  <q-header>
    <q-toolbar class="topbar">
      <img
        alt="Quasar logo"
        src="~assets/logo.svg"
        class="topbar__logo" id="logo"
      >

      <q-input bg-color="white" rounded filled v-model="text" placeholder="Pesquisar" class="topbar__search"
               debounce="600" @input="$emit('textSearch', text)">
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

<style scoped lang="scss">
.topbar {
  background: var(--yellow);
  padding: var(--space-sm);
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 6rem;
  }

  &__search {
    width: calc(100% - 8rem);
  }
}
</style>
