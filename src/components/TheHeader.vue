<template>
  <div class="header w_max flex flex_between flex_center_vertical">
     <p class="login">{{ login }}</p>
    <button v-show="path" @click="$_header_pushAdd" class="btn btn_create icon-create"></button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: 'todo'
    }
  },
  computed: {
    path () {
      return this.$route.path === '/'
    }
  },
  methods: {
    $_header_pushAdd () {
      this.$router.push('/edit')
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding: 1rem 0;
}
.login {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 3rem;
  color: black;
  &:first-letter {
    color: orangered;
  }
}
.btn_create {
  border-radius: 100%;
  font-size: 2rem;
  color: rgb(105, 105, 253);
  background-color: rgb(243, 242, 242);
  &:active {
    background-color: darken(rgb(243, 242, 242), 5%);
  }
}
</style>
