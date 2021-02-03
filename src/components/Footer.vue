<template>
  <footer class="footer">
    <img
      alt="Quasar logo"
      src="~assets/logo.svg"
      class="footer_logo"
    >
    <strong class="footer_title"> Juntos Somos Mais Fidelização S.A</strong>
    <span class="footer_sub-title"> Siga-nos em nossas redes sociais: </span>
    <section class="footer_social-media">
      <q-icon name="fab fa-facebook"/>
      <q-icon name="fab fa-instagram"></q-icon>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">

.footer {
  background: var(--yellow);
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  &_logo {
    width: 8vw;
    min-width: 120px;
    margin-bottom: var(--space-xs);
  }

  &_title {
    font-size: 1rem;
  }

  &_sub-title {
    font-size: 0.8rem;
  }
  &_social-media{
    font-size: 2rem;
    width: 8rem;
    display: flex;
    justify-content: space-evenly;
    //background: #6c757d;
  }

}

//.footer > * + * {
//  margin: var(--space-xxs);
//  padding: var(--space-xxs);
//}
</style>
