import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import formularioRegistro from './components/Formulario.vue'
import dataBlog from './components/Blog.vue'

const routes = [
    {path: '/',component: HelloWorld},
    {path: '/forms',component: formularioRegistro},
    {path: '/home',component: HelloWorld},
    {path: '/personas',component: dataBlog}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app')
