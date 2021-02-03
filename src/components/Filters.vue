<template>
  <q-page class="filters">
    <strong class="filters__title"> Filtrar por usuários: </strong>
    <q-option-group class="filters__options"
                    :options="filters"
                    type="checkbox"
                    v-model="group"
    />
  </q-page>
</template>

<script>
export default {
  name: 'Filters',
  data () {
    return {
      filters: [
        {
          label: 'Especial',
          value: 'Especial',
          color: 'grey'
        },
        {
          label: 'Normal',
          value: 'Normal',
          color: 'grey'
        },
        {
          label: 'Trabalhoso',
          value: 'Trabalhoso',
          color: 'grey'
        }
      ],
      group: []
    }
  },
  watch: {
    group () {
      this.$emit('updateFilters', this.group)
    }
  }
}
</script>

<style lang="scss">

.filters {
  margin-top: 5%;
  max-height: 15vh;
  width: 100%;

  &__title {
    margin: 8px;
    font-size: 1.2rem;
  }

  &__options {
    display: flex;
    flex-direction: row;
    margin-left: var(--space-xl);
  }

}

@media (min-width: 500px) {
  .filters__options {
    flex-direction: column;
  }
  .filters {
    width: 20vw;
    font-size: 1.1rem;
  }
}
</style>
