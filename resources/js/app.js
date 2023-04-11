import "./bootstrap";
import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./components/App.vue";
import {routes} from "./Routes";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify()

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(vuetify);
app.mount("#app");
app.use(router);
