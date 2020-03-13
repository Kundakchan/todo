<template>
  <transition name="modal">
    <section
      v-if="show"
      class="modal grid grid_center grid_center_vertical"
      @click="modalClose($event)"
    >
      <div class="modal__content">
        <slot></slot>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    modalClose (event) {
      if (event.target.classList.contains('modal')) this.$emit('close', true)
    }
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
  height: 60%;
  width: 60%;
}
.modal-enter-active, .modal-leave-active {
  transition: opacity .3s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>
