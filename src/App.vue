<template>
  <div id="app">
    <header class="app-header">
      <TheHeader/>
    </header>
    <main class="app-main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.app-header, .app-main {
  margin: 0 auto 0;
  max-width: 1230px;
  padding: 0 .9375rem;
  width: 100%;
}
</style>
