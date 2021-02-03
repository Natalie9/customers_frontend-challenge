<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>
      <img
        alt="Sem resultados"
        src="~assets/pixeltrue-error-1.svg"
        class="error404"
      >
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
<style>
.error404{
  width: 40vw;
}
</style>
