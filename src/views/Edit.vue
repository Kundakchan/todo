<template>
  <section class="edit grid h_max">
    <div v-if="!showMessageDelete" class="edit__header">
      <EditTitle
        :options="note.title"
        @taskAdd="taskAdd()"
        @update:title="updateTitle($event)"
      />
    </div>
    <ul v-if="!showMessageDelete" class="edit__body">
      <li class="edit__body-item" v-for="(item) in note.tasks" :key="item.id">
        <EditTask
         :options="item"
          @taskDelete="taskDelete($event)"
          @update:task="updateTask($event)"
          @update:checkbox="updateTaskCheckbox($event)"
        />
      </li>
    </ul>
    <div v-if="!showMessageDelete" class="edit__footer">
      <EditBottom
        :id="id"
        @add="noteAdd"
        @remove="noteRemove"
        @cancel="noteCancel"
        @save="noteSave"
      />
    </div>
    <div v-if="showMessageDelete" class="message grid grid_center grid_center_vertical">
      <MessageDelete/>
    </div>
  </section>
</template>

<script>
import EditTitle from '@/components/EditTitle'
import EditTask from '@/components/EditTask'
import EditBottom from '@/components/EditBottom'
import MessageDelete from '@/components/MessageDelete'
import { mapGetters } from 'vuex'
export default {
  props: {
    id: String
  },
  components: {
    EditTitle,
    EditTask,
    EditBottom,
    MessageDelete
  },
  data () {
    return {
      note: null,
      alert: {
        message: 'Забача добавлена !',
        show: false
      },
      showMessageDelete: false
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
              id: Number((Math.random() * 1e8).toFixed(0)).toString(16),
              text: 'Новая задача',
              status: false
            }
          ]
        }
      }
    },
    updateTitle (event) {
      this.note.title = event
    },
    taskAdd () {
      this.note.tasks.push({
        id: Number((Math.random() * 1e8).toFixed(0)).toString(16),
        text: 'Новая запись',
        status: false
      })
    },
    taskDelete (event) {
      this.note.tasks.splice(this.note.tasks.findIndex(item => item.id === event), 1)
    },
    updateTask (event) {
      this.note.tasks.forEach(item => {
        if (item.id === event.id) item.text = event.input
      })
    },
    updateTaskCheckbox (event) {
      this.note.tasks.forEach(item => {
        if (item.id === event.id) item.status = event.input
      })
    },
    noteAdd () {
      this.$store.dispatch('NOTE__ADD', this.note)
    },
    noteRemove () {
      this.$store.dispatch('NOTE__DELETE', this.id)
      this.showMessageDelete = true
    },
    noteCancel () {
      this.$router.push('/')
    },
    noteSave () {
      this.$store.dispatch('NOTE__UPDATE', { id: this.id, note: this.note })
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
.message {
  grid-row: 1 / -1;
}
</style>
