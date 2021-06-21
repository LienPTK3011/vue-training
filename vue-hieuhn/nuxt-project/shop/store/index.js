import Api from '../service/Api'

export const state = () => ({
  menus: []
})

export const getters = {

}

export const actions = {
  getAllMenu: store => {
    Api.getAllMenu().then((res) => {
      store.commit("setAllMenu", res.data)
    }).catch((errors) => {
      console.log(errors)
    })
  }
}

export const mutations = {
  setAllMenu(state, data) {
    state.menus = data
  }
}