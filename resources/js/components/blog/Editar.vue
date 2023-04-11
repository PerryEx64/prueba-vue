<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="h4">Editar Blog</div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Título</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="blog.titulo"
                                    />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <label for="floatingTextarea2"
                                        >Contenido</label
                                    >
                                    <textarea
                                        name="floatingTextarea2"
                                        v-model="blog.contenido"
                                        style="height: 100px, width: 100px;"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "editar-blog",
    data(){
        return{
            blog: {
                titulo: "",
                contenido: ""
            }
        }
    },
    mounted(){
        this.mostrarBlog();
    },
    methods:{ 
        async mostrarBlog(){
           
            await axios.get(`/api/blog/${this.$route.params.id}`)
            .then(res => {
                const {titulo, contenido} = res.data;
                this.titulo = titulo;
                this.contenido = contenido;
            })
            .catch(error => {
                console.log(error)
            })
        },
        async actualizar(){
            await axios.put(`/api/blog/${this.$route.params.id}`, this.blog)
            .then(res => {
                this.$router.push({
                    name:"mostrarBlogs"
                })
            }).catch((error) => console.log(error))
        }
    }
};
</script>

