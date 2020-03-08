<template>
  <ul class="tasks grid">
    <li class="tasks__item grid" v-for="(item, index) in tasks" :key="index">
      <span class="tasks__text">
        {{ item.text }}
      </span>
      <span class="tasks__status">
        <span v-if="item.status" class=" tasks__icon tasks__icon_check icon-check"></span>
        <span v-if="!item.status" class=" tasks__icon tasks__icon_uncheck icon-uncheck"></span>
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.tasks {
  grid-row-gap: .5rem;
}
.tasks__item {
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  &:last-child {
    border-bottom: none;
  }
}
.tasks__text {
  font-weight: 300;
  color: lighten(black, 30%);
}
.tasks__icon {
  font-size: 1.2rem;
}
.tasks__icon_check {
  color: green;
}
.tasks__icon_uncheck {
  color: black;
}
</style>
