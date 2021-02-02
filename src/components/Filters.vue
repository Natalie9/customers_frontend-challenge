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
  max-height: 15vh;

  &__title {
    margin: 8px;
  }

  &__options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 30vw));
    margin-left: 4px;
  }

  @media (min-width: 500px) {
    .filters {
      margin: 0 10%;
    }
  }
}
</style>
