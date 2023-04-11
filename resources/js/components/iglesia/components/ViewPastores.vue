<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <router-link
                    :to="{ name: 'crearBlogs' }"
                    class="btn btn-success"
                    ><i class="fas fa-plus-circle"></i
                ></router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="bg-primary text-white">
                            <tr>
                                
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="iglesia in iglesias" :key="iglesia.id">
                                <td>{{ iglesia.nombre }}</td>
                                <td>{{ iglesia.direccion }}</td>
                                <td>{{ iglesia.region_id }}</td>
                                <td>
                                   <!--  <router-link
                                        :to="{
                                            name: 'editarBlogs',
                                            params: { id: blog.id },
                                        }"
                                        class="btn btn-info"
                                        ><i class="fas fa-edit"></i
                                    ></router-link>
                                    <a
                                        type="button"
                                        @click="borrarBlog(blog.id)"
                                        class="btn btn-danger"
                                        ><i class="fas fa-trash"></i
                                    ></a> -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "viewPastores",
    data() {
        return { iglesias: [] };
    },
    mounted() {
        this.mostrarIglesias();
    },
    methods: {
        async mostrarIglesias() {
            await axios
                .get("/api/iglesias")
                .then((response) => {
                    this.iglesias = response.data;
                })
                .catch((error) => {
                    this.iglesias = [];
                });
        },
        borrarBlog(id) {
            if (confirm("Confirma eliminar el registro?")) {
                console.log("se confirma");
                /* axios.delete(`api/blog/${id}`)
                .then(response => {
                    this.mostrarBlogs()
                })
                .catch(error => {
                    this.blog = []
                }) */
            }
        },
    },
};
</script>

<style></style>
