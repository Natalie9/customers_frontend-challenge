<template>
  <q-page>
    <strong class="text-h6 q-ma-md"> Filtrar por usuários: </strong>
    <q-option-group class="q-ma-md"
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

<style scoped>

</style>
