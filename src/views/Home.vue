<template>
  <ul class="note-list grid">
    <li v-for="(item) in getNotes" :key="item.id">
      <BaseNote :options="item"/>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
import BaseNote from '@/components/BaseNote'
export default {
  components: {
    BaseNote
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'getNotes'
    ])
  }
}
</script>

<style lang="scss" scoped>
.note-list {
  grid-row-gap: 1.5rem;
  padding: 2rem 0;
}
</style>
