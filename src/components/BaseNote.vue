<template>
  <article class="note grid">
    <div class="note__header shadow">
      <h2 class="note__title">{{ options.title }}</h2>
    </div>
    <div class="note__body">
      <BaseNoteTasks :tasks="options.tasks"/>
    </div>
    <div class="note__footer shadow flex flex_right">
      <div class="btn_group">
        <button class="btn btn_note icon-edit" @click="noteEdit(id)"></button>
        <button class="btn btn_note icon-delete" @click="noteDelete"></button>
      </div>
    </div>
  </article>
</template>
<script>
import BaseNoteTasks from '@/components/BaseNoteTasks'
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  components: {
    BaseNoteTasks
  },
  data () {
    return {}
  },
  methods: {
    noteDelete () {
      this.$store.dispatch('NOTE__DELETE', this.id)
    },
    noteEdit (id) {
      this.$router.push(`/edit/${this.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  grid-row-gap: 1rem;
}
.note__header {
  background-color: rgb(247, 239, 239);
  padding: .5rem;
  border-radius: 2px;
}
.note__title {
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
}
.note__body {
  padding: 0 1rem;
}
.note__footer {
  background-color: rgb(247, 239, 239);
  padding: .3rem .5rem;
  border-radius: 2px;
}
.btn_note {
  border-radius: 100%;
  color: rgb(105, 105, 253);
  font-size: 1rem;
  background-color: darken(rgb(247, 239, 239), 3%);
  &:active {
    background-color: darken(rgb(247, 239, 239), 10%)
  }
}
</style>
