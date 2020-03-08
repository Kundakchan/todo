<template>
  <section class="edit grid h_max">
    <div class="edit__header">
      <EditTitle/>
    </div>
    <ul class="edit__body">
      <li class="edit__body-item" v-for="index in 5" :key="index">
        <EditTask/>
      </li>
    </ul>
    <div class="edit__footer">
      <EditBottom/>
    </div>
  </section>
</template>

<script>
import EditTitle from '@/components/EditTitle'
import EditTask from '@/components/EditTask'
import EditBottom from '@/components/EditBottom'
export default {
  components: {
    EditTitle,
    EditTask,
    EditBottom
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.edit {
  padding: 2rem 0;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
}
</style>
