<template>
  <div class="form">
    <div class="form__content">
      <div class="form__inner">
        <div>Введите заголовок</div>
        <input class="form__input" type="text" v-model="title">
      </div>
      <div class="form__inner">
        <div>Введите текст</div>
        <input class="form__input" type="text" v-model="subtitle">
      </div>
      <div class="form__inner">
        <div>Введите автора</div>
        <input class="form__input" type="text" v-model="author">
      </div>
    </div>
    <button @click="addItem()">Добавить новый слайдер</button>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      title: '',
      subtitle: '',
      author: '',
    }
  },

  methods: {
    addItem() {
      const item = {
        title: this.title,
        subtitle: this.subtitle,
        author: this.author,
      }
      this.$store.dispatch('setNewItemSlider', item)
    }
  }
}
</script>

<style scoped lang="scss">
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    width: 300px;
    margin: 0 auto;
    padding: 10px;

    &__content{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
    }
    &__input{
      margin: 10px 0;
    }
  }
</style>
