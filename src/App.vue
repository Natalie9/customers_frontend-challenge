<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
:root {
  --orange: #fd7e14;
  --yellow: #ffc107;
  --yellow-light: rgba(255, 193, 7, 0.7);
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space: 24px;
  --space-md: 32px;
  --space-lg: 48px;
  --space-xlg: 64px;
  --screen-xs: 360px;
  --screen-sm: 768px;
  --screen-md: 992px;
  --screen-lg: 1280px;
  --screen-xlg: 1440px;
}

body {
  background: var(--yellow);
  --scrollbarBG: linear-gradient(to bottom, rgba(245, 252, 255, 0.33), transparent);
  --thumbBG: linear-gradient(to top, var(--yellow), var(--orange), var(--yellow));

  &::-webkit-scrollbar {
    width: 10px;
    height: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--thumbBG);
    border-radius: 30px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
    border-radius: 30px;
  }

  @media (min-width: 550px) {
    font-size: 16px;
  }
}
</style>
