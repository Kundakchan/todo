<template>
  <transition name="modal">
    <section class="modal grid grid_center grid_center_vertical">
      <div class="modal__content">
        <slot></slot>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal__content {
  height: 80%;
  width: 80%;
}
</style>