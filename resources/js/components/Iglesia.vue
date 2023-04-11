<template>
    <div class="container mt-5">
        <div class="card w-25" v-for="iglesia in iglesias" :key="iglesia.id">
            <div class="card-header">
                {{ iglesia.nombre }}
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ iglesia.direccion }}</h5>
                <p class="card-text">
                    {{
                        `Pertenece a la ${iglesia.region_id} y tiene como pastor a ${iglesia.pastor_id} `
                    }}
                </p>
                <a href="#" class="btn btn-primary">Ver Historial</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "iglesia",
    data() {
        return {
            iglesias: [],
        };
    },
    mounted() {
        this.mostrarBlogs();
    },
    methods: {
        async mostrarBlogs() {
            await axios
                .get("/api/iglesias")
                .then((response) => {
                    this.iglesias = response.data;
                })
                .catch((error) => {
                    this.iglesias = [];
                });
        },
    },
};
</script>

<style>
#container {
    display: flex;
}
</style>
