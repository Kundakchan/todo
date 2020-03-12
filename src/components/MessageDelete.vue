<template>
  <section class="message-delete grid">
    <h1 class="message-delete__text">Вы успешно удалили заметку</h1>
    <ul class="message-delete__link flex flex_center">
      <li class="message-delete__item">
        <router-link to="/">Вернутся на главную</router-link>
      </li>
      <li class="message-delete__item">
        <router-link to="/edit">Создать новую заметку</router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.message-delete {
  row-gap: 5rem;
}
.message-delete__text {
  font-weight: 100;
  font-size: 3rem;
  line-height: 1em;
  color: rgb(131, 131, 131);
  text-align: center;
}
.message-delete__item {
  margin: 0 .5rem;
  a {
    font-weight: 100;
  }
}
</style>
