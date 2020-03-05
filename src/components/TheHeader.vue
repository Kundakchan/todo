<template>
  <div class="header w_max flex flex_between flex_center_vertical">
    <a href="#" @click="$_header_pushHome" class="login">
      <p>{{ login }}</p>
    </a>
    <button  @click="$_header_pushAdd" class="btn btn_create icon-create"></button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      login: 'todo'
    }
  },
  methods: {
    $_header_pushHome () {
      this.$router.push('Home')
    },
    $_header_pushAdd () {
      this.$router.push('Edit')
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
  font-size: 3rem;
  p:first-letter {
    color: orange;
  }
  p {
    color: black;
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
