<template>
  <div class="edit-task grid grid_center grid_center_vertical">
    <span class="group_control w_max">
      <input type="text" class="control edit-task_control w_max" v-model="task">
    </span>
    <span class="edit-task-checked">
      <label class="check grid grid_center_vertical">
        <input type="checkbox" class="check__input">
        <span @click="$_editTask_checked" v-if="checked" class="check__box check__box_checked icon-check"></span>
        <span @click="$_editTask_checked" v-if="!checked" class="check__box icon-uncheck"></span>
      </label>
    </span>
    <span class="edit-task-delete">
      <button class="btn edit-task-icon icon-delete shadow"></button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    options: Object
  },
  data () {
    return {
      task: this.options.text,
      checked: this.options.status
    }
  },
  methods: {
    $_editTask_checked () {
      this.checked = !this.checked
    }
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
.check {
  position: relative;
}
.check__input {
  position: absolute;
  appearance: none;
}
.check__box {
  padding: .3em .7em;
  cursor: pointer;
}
.check__box_checked {
  color: blue;
}
.edit-task-icon {
  border-radius: 100%;
  font-size: 1rem;
  padding: .3rem;
  color: red;
}
</style>
