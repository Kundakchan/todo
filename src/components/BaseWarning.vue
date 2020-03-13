<template>
  <div class="warning w_max h_max grid">
    <div class="warning__body grid grid_center_vertical">
      <h2>{{ message }}</h2>
    </div>
    <div class="warning__footer flex flex_right">
      <div class="btn_group">
        <button @click="confirm" class="btn btn_warning">Я Уверен</button>
        <button @click="cancel" class="btn btn_dark">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm', true)
    },
    cancel () {
      this.$emit('cancel', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.warning {
  padding: 1rem;
  background-color: white;
  grid-template-rows: 1fr auto;
}
.warning__body {
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.3);
  }
}
</style>
