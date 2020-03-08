<template>
  <section class="edit grid h_max">
    <div class="edit__header">
      <EditTitle
        :options="note.title"
        @taskAdd="taskAdd($event)"
      />
    </div>
    <ul class="edit__body">
      <li class="edit__body-item" v-for="(item, index) in note.tasks" :key="index">
        <EditTask :options="item"/>
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
import { mapGetters } from 'vuex'
export default {
  props: {
    id: String
  },
  components: {
    EditTitle,
    EditTask,
    EditBottom
  },
  data () {
    return {
      note: null
    }
  },
  computed: {
    ...mapGetters([
      'getNote'
    ])
  },
  methods: {
    $_taskInit () {
      if (this.id) {
        this.note = JSON.parse(JSON.stringify(this.getNote(this.id)))
      } else {
        this.note = {
          title: 'Новая заметка',
          tasks: [
            {
              text: 'Новая задача',
              status: false
            }
          ]
        }
      }
    },
    taskAdd (event) {
      this.note.tasks.push({
        text: 'Новая запись',
        status: false
      })
    }
  },
  created () {
    this.$_taskInit()
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
