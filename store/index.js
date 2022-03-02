export const state = () => ({
  slider: [],
  sliderActivePage: 0,
  sliderActive: null,
  modal: false,
});

export const getters = {
  getSliderPagination(state) {
    return Math.ceil(state.slider.length / 3);
  },
  getSlider(state) {
    const buttonClicked = state.sliderActivePage;
    const articlesOnPage = 3;
    const startFrom = buttonClicked * articlesOnPage;
    return state.slider.slice(startFrom, startFrom + articlesOnPage);
  },
  getSliderItem(state) {
    const buttonClicked = state.sliderActive;
    const articlesOnPage = 1;
    const startFrom = buttonClicked * articlesOnPage;
    return state.slider.slice(startFrom, startFrom + articlesOnPage);
  }
}

export const mutations = {
  setSliderActive(state, value) {
    state.sliderActivePage = value - 1;
  },
  setNextPageSlider(state) {
    if (state.sliderActivePage !== Math.ceil(state.slider.length / 3 - 1)) {
      state.sliderActivePage = state.sliderActivePage + 1;
    }
  },
  setPrevPageSlider(state) {
    if (state.sliderActivePage !== 0) {
      state.sliderActivePage = state.sliderActivePage - 1;
    }
  },
  setNewItemSlider(state, value) {
    state.slider.push(value)
  },
  setModal(state, value){
    state.modal = true
    state.sliderActive = value
  },
  setPrevSliderItem(state) {
    if (state.sliderActive !== 0) {
      state.sliderActive = state.sliderActive - 1
    }
  },
  setNextSliderItem(state) {
    if (state.sliderActive < state.slider.length - 1) {
      state.sliderActive = state.sliderActive + 1
    }
  },
  setCloseModal(state) {
    state.modal = false
  },
  setSlider(state, value) {
    state.slider.push(value)
  }
};

export const actions = {
  async setSlider(store) {
    await this.$axios
      .get('https://picsum.photos/v2/list?page=1&limit=10')
      .then(response => {
        const data = response.data
        for (let i = 0; i < data.length; i++) {
          store.commit('setSlider',
            {
              id: i,
              title: 'title' + i,
              subtitle: 'subtitle' + i,
              author: response.data[i].author,
              image: response.data[i].download_url,
            }
          );
        }
      })
      .catch(err => console.log(err));
  },
  setSliderActive({ commit }, value) {
    commit('setSliderActive', value);
  },
  setNextPageSlider({ commit }) {
    commit('setNextPageSlider');
  },
  setPrevPageSlider({ commit }) {
    commit('setPrevPageSlider');
  },
  async setNewItemSlider(store, value) {
    await this.$axios
      .get(`https://picsum.photos/id/${store.state.slider.length + 1}/info`)
      .then(response => {
        store.commit('setNewItemSlider',
          {
            id: store.state.slider.length + 1,
            title: value.title,
            subtitle: value.subtitle,
            author: value.author,
            image: response.data.download_url
          }
        );
      })
      .catch(err => console.log(err));
  },
  setModal({ commit }, value) {
    commit('setModal', value);
  },
  setPrevSliderItem({ commit }) {
    commit('setPrevSliderItem');
  },
  setNextSliderItem({ commit }) {
    commit('setNextSliderItem');
  },
  setCloseModal({ commit }) {
    commit('setCloseModal');
  },
};


