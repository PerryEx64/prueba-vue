const Home = () => import("./components/Home.vue");
const Contacto = () => import("./components/Contacto.vue");

const Mostrar = () => import("./components/blog/Mostrar.vue");
const Crear = () => import("./components/blog/Crear.vue");
const Editar = () => import("./components/blog/Editar.vue");

const Iglesia = () => import("./components/Iglesia.vue");
const AddPastor = () => import("./components/iglesia/components/AddPastor.vue")

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: "mostrarBlogs",
        path: "/blogs",
        component: Mostrar
    },
    {
        name: "crearBlogs",
        path: "/crear",
        component: Crear
    },
    {
        name: "editarBlogs",
        path: "/editar/:id",
        component: Editar
    },
    {
        name: "iglesia",
        path: "/iglesia",
        component: Iglesia
    },
    {
        name: "addPastor",
        path: "/addPastor",
        component: AddPastor
    },
];
