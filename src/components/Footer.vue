<template>
  <footer class="footer">
    <img
      alt="Quasar logo"
      src="~assets/logo.svg"
      class="logo q-ma-md"
    >
    <strong class="text-h6"> Juntos Somos Mais Fidelização S.A</strong>
    <span> Siga-nos em nossas redes sociais: </span>
    <section>
      <q-icon name="facebook" size="md"></q-icon>
      <q-icon name="instagram" size="md"></q-icon>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.logo {
  width: 10em;
}

.footer {
  background: var(--yellow);
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.footer > * + *{
  margin: var(--space-xxs);
  padding: var(--space-xxs);
}
</style>
