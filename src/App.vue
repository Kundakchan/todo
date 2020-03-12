<template>
  <div id="app" class="app grid">
    <Preloader :show="preloader"/>
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
import Preloader from '@/components/Preloader'
export default {
  components: {
    TheHeader,
    Preloader
  },
  data () {
    return {
      preloader: false
    }
  }
}
</script>

<style lang="scss">
.app {
  grid-template-rows: auto 1fr;
}
.app-header, .app-main {
  margin: 0 auto 0;
  max-width: 1230px;
  padding: 0 .9375rem;
  width: 100%;
}
</style>
