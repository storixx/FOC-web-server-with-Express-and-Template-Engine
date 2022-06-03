const App = {
  methods: {
    async changeFavourites(id) {
      const res = await fetch(`/api/favour/${id}`, { method: 'PATCH' })
      this.foods = await res.json()
    },
    async increase(id) {
      const res = await fetch(`/api/incr/${id}`, { method: 'PATCH' })
      this.foods = await res.json()
    },
    async decrease(id) {
      const res = await fetch(`/api/decr/${id}`, { method: 'PATCH' })
      this.foods = await res.json()
    },
    async addToOrder(id) {
      const res = await fetch(`api/order/${id}`, { method: 'POST' })
      this.order = res.json()
    },
    async remove(id) {
      const res = await fetch(`api/order/${id}`, { method: 'DELETE' })
      this.order = res.json()
      window.location.reload()
    }
  },
  data() {
    return {
      foods: [],
      order: []
    }
  },
  async mounted() {
    const res = await fetch('/api/menu')
    this.foods = await res.json()
    const res2 = await fetch('/api/order')
    this.order = await res2.json()
  }
}
Vue.createApp(App).mount('#app')