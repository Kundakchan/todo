<template>
  <div class="edit-task grid grid_center grid_center_vertical">
    <span class="group_control w_max">
      <input type="text" class="control edit-task_control w_max">
    </span>
    <span class="edit-task-checked">
      <input type="checkbox">
    </span>
    <span class="edit-task-delete">
      <button class="btn edit-task-icon icon-delete shadow"></button>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.edit-task {
  grid-template-columns: 10fr 1fr 1fr;
  column-gap: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: .5rem 1rem;
}
.edit-task_control {
  font-size: 1.4rem;
  border: none;
  font-weight: 300;
}
.edit-task-icon {
  border-radius: 100%;
  font-size: 1rem;
  padding: .3rem;
  color: red;
}
</style>
