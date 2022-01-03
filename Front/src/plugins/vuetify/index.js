import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import preset from './default-preset/preset'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      customProperties: true,
      variations: false,
    },
  },
})
