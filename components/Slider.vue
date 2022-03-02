<template>
  <div class="slider">
    <div class="slider__arrows">
      <div class="slider__arrowsWrapper">
        <svg
          class="slider__arrows"
          width="13"
          height="20"
          viewBox="0 0 13 20"
          xmlns="http://www.w3.org/2000/svg"
          @click="setPrevPageSlider()"
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
          class="slider__arrows"
          width="14"
          height="20"
          viewBox="0 0 14 20"
          xmlns="http://www.w3.org/2000/svg"
          @click="setNextPageSlider()"
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
    </div>
    <div class="slider__content">
      <div v-for="item of getSlider" :key="item.id" class="slider__item" @click="setModal(item.id)">
        <div>
          <div class="slider__text">{{ item.title }}</div>
          <div class="slider__text">{{ item.subtitle }}</div>
          <div class="slider__text">{{ item.author }}</div>
          <img :src="item.image" class="slider__image"/>
        </div>
      </div>
    </div>
    <div class="slider__pagination">
      <div
        v-for="i of getSliderPagination"
        :id="i"
        :key="i"
        :class="{ active: sliderActivePage === i - 1 }"
        class="slider__dot"
        @click="setSliderActive(i)"
      ></div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Slider',

  computed: {
    ...mapState(['slider', 'sliderActivePage']),
    ...mapGetters(['getSliderPagination', 'getSlider', 'getSliderActivePage']),
  },

  methods: {
    ...mapActions(['setSlider','setSliderActive', 'setNextPageSlider', 'setPrevPageSlider', 'setModal']),

    interval() {
      this.counterInterval = setInterval(() => {
        if (this.getSliderActivePage === this.getSliderPagination - 1) {
          this.setSliderActive(0);
        }
        this.setNextPageSlider();
      }, 3000);
    },
  },

  mounted() {
    this.setSlider()
    this.interval()
  },

  beforeDestroy() {
    clearInterval(this.counterInterval);
  },
}
</script>

<style lang="scss" scoped>
  .slider{
    display: flex;
    flex-direction: column;
    align-items: center;

    &__arrows{
      display: flex;
    }
    &__arrowsWrapper{
      display: flex;
    }
    &__arrows{
      margin: 0 5px;
    }
    &__content{
      display: flex;
      border: 2px solid black;
      margin: 10px 0;
    }
    &__item{
      width: 300px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      margin: 20px;
      position: relative;
    }
    &__image{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    &__text{
      color: white;
      font-size: 20px;
    }
    &__pagination{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__dot{
      width: 10px;
      height: 10px;
      border: 1px solid black;
      border-radius: 50px;
      margin: 0 5px;
    }
  }
  .active {
    background-color: black;
  }
</style>
