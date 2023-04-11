<template>
    <div class="container" >
    <div class="row">
        <div class="col-lg-12 mb-4">
            <router-link :to='{ name:"crearBlogs" }' class="btn btn-success"
                ><i class="fas fa-plus-circle"></i
            ></router-link>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>

                            <th>ID</th>
                            <th>Título</th>
                            <th>Contenido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{ blog.id }}</td>
                            <td>{{ blog.titulo }}</td>
                            <td>{{ blog.contenido }}</td>
                            <td>
                                <router-link
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
                                ></a>
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
    name: "blogs",
    data() {
        return { blogs: [] };
    },
    mounted() {
        this.mostrarBlogs();
    },
    methods: {
        async mostrarBlogs() {
            await axios
                .get("/api/blog")
                .then((response) => {
                    this.blogs = response.data;
                
                })
                .catch((error) => {
                    this.blogs = [];
                });
        },
        borrarBlog(id){
            if(confirm("Confirma eliminar el registro?")){
                axios.delete(`api/blog/${id}`)
                .then(response => {
                    this.mostrarBlogs()
                })
                .catch(error => {
                    this.blog = []
                })
            }
        }
    },
};
</script>

<style></style>
