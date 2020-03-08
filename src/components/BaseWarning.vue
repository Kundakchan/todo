<template>
  <div class="warning w_max h_max grid">
    <div class="warning__body grid grid_center_vertical">
      <h2>{{ warning }}</h2>
    </div>
    <div class="warning__footer flex felx_right">
      <div class="button_group">
        <button class="btn btn_dark">Я Уверен</button>
        <button class="btn btn_dark">Отмена</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warning {
  padding: 1rem;
}
.warning__body {
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.3);
    background-color: white;
  }
}
</style>
