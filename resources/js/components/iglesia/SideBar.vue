<template>
    <div class="" id="containerSidebar">
        <div id="ContainerImage">
            <img
                src="./../../../../public/logo-idec.png"
                class="card-img-top"
                alt="logo IDEC"
                id="image"
            />
        </div>
       <div>
        <button type="button" @click="ChooseComponent('AddPastor')" >Agregar Pastor</button>
        <router-link class="nav-link" to="/addPastor">Agregar Pastor</router-link>
       </div>
       <router-view />
    </div>
</template>

<script>
import ButtonNavigation from "./components/ButtonNavigation.vue"
export default {
    name: "Sidebar",
    data(){
        return {
            nameComponent: ""
        }
    },
    components: {
        ButtonNavigation
    },
    methods: {
        ChooseComponent(name){
            this.nameComponent = name;
        }
    }
};
</script>

<style>
#containerSidebar {
    background-color: #1e2738;
    width: 40%;
    height: 100vh;
}
#image {
    width: 250px;
    height: 250px;
}
#ContainerImage {
    display: flex;
    justify-content: center;
}
</style>
