// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'
import { createMetaManager } from 'vue-meta'
const app = createApp(App);

uiComponents.forEach(component => app.component(component.name, component));

const metaManager = createMetaManager();
app.use(metaManager);
app.use(router)
app.use(store)
app.mount('#app')
