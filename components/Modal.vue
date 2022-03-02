<template>
  <div class="modal" :class="modal ? 'active' : ''" ref="modal" @click.stop="(e) => closeModal(e)">
    <div class="modal__container" ref="container">
      <div class="modal__arrows">
        <svg
          class="modal__arrowsPrev"
          width="13"
          height="20"
          viewBox="0 0 13 20"
          xmlns="http://www.w3.org/2000/svg"
          @click="setPrevSliderItem()"
        >
          <rect
            width="14.8636"
            height="2.02685"
            rx="1.01343"
            transform="matrix(0.750584 0.660775 -0.750584 0.660775 1.52148 8.83887)"
          />
          <rect
            width="14.8636"
            height="2.02685"
            rx="1.01343"
            transform="matrix(-0.750584 0.660775 -0.750584 -0.660775 12.6777 1.33936)"
          />
        </svg>

        <svg
          class="modal__arrowsNext"
          width="14"
          height="20"
          viewBox="0 0 14 20"
          xmlns="http://www.w3.org/2000/svg"
          @click="setNextSliderItem()"
        >
          <rect
            width="14.8636"
            height="2.02685"
            rx="1.01343"
            transform="matrix(-0.750584 -0.660775 0.750584 -0.660775 11.8164 11.1611)"
          />
          <rect
            width="14.8636"
            height="2.02685"
            rx="1.01343"
            transform="matrix(0.750584 -0.660775 0.750584 0.660775 0.660156 18.6606)"
          />
        </svg>
      </div>
      <div v-for="item of getSliderItem" class="modal__inner">
        <div class="modal__innerText">
          <div class="modal__text">{{ item.title }}</div>
          <div class="modal__text">{{ item.subtitle }}</div>
          <div class="modal__text">{{ item.author }}</div>
        </div>
        <img :src="item.image" class="modal__image" />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "Modal",

  computed: {
    ...mapState(['modal']),
    ...mapGetters(['getSliderItem'])
  },

  methods: {
    ...mapActions(['setPrevSliderItem', 'setNextSliderItem']),
    closeModal(e){
      const modal = this.$refs.modal
      if(e.target === modal){
        this.$store.dispatch('setCloseModal')
      }
    }
  },


}
</script>

<style scoped lang="scss">
  .modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: rgba(0,0,0, 0.55);
    justify-content: center;
    align-items: center;
    display: none;

    &__container{
      width: 500px;
      height: 500px;
      background-color: white;
      position: relative;
    }
    &__arrows{
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
    }
    &__arrowsNext{
      position: absolute;
      right: -50px;
      fill: white;
    }
    &__arrowsPrev{
      position: absolute;
      left: -50px;
      fill: white;
    }
    &__inner{
      position: relative;
      width: 100%;
      height: 100%;
    }
    &__innerText{
      position: absolute;
      bottom: 10%;
      left: 10%;
      z-index: 2;
    }
    &__text{
      color: white;
      font-size: 20px;
      z-index: 2;
    }
    &__image{
      position: absolute;
      top: 0;
      left: 0;
      max-width: 500px;
      max-height: 500px;
      height: 100%;
      width: 100%;
    }
  }
  .active{
    display: flex;
  }
</style>
