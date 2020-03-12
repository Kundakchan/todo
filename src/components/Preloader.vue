<template>
  <section v-if="show" class="preloader grid grid_center grid_center_vertical">
    <div class="preloader__content">
      <h1 class="preloader__message">{{ message }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  data () {
    return {
      message: 'loading'
    }
  }
}
</script>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  z-index: 101;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}
.preloader__message {
  font-size: 2rem;
  font-weight: 100;
  color: orangered;
}
</style>
