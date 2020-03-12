<template>
  <div class="edit-bottom w_max flex flex_right">
    <div class="btn_group flex">
      <div v-if="id" @click="save" class="button btn btn_big btn_warning">Сохранить</div>
      <div v-if="!id" @click="add" class="button btn btn_big btn_warning">Добавить</div>
      <div v-if="id" @click="remove" class="button btn btn_big btn_dark">Удалить</div>
      <div @click="cancel" class="button btn btn_big btn_dark">Отменить</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data () {
    return {}
  },
  methods: {
    save () {
      this.$emit('save', true)
    },
    add () {
      this.$emit('add', true)
    },
    remove () {
      this.$emit('remove', true)
    },
    cancel () {
      this.$emit('cancel', true)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
