<template>
  <div class="edit-title grid grid_center_vertical shadow">
    <input class="control edit-title__control" type="text" v-model="title">
    <div class="add">
      <button class="btn btn_add-task icon-plus" @click="taskAdd"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: String
  },
  data () {
    return {
      title: this.options
    }
  },
  methods: {
    taskAdd () {
      this.$emit('taskAdd', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-title {
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  background-color: rgb(247, 239, 239);
  border-radius: 2px;
  padding: 0 1rem;
}
.edit-title__control {
  padding: .5rem 0;
  font-size: 2rem;
  text-align: center;
  border: none;
  font-family: 'Roboto';
  font-weight: 300;
}
.btn_add-task {
  border-radius: 100%;
  font-size: 1.5rem;
  color: rgb(105, 105, 253);
  background-color: darken(rgb(243, 242, 242), 5%);
  &:active {
    background-color: lighten(rgb(243, 242, 242), 5%);
  }
}
</style>
