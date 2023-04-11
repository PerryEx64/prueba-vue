<template>
  <main >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" to="/iglesia">Ver Iglesia</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      > 
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
           
                <router-link class="nav-link" to="/">Inicio</router-link>
      
          </li>
          <li class="nav-item">
            <div>
                <router-link class="nav-link" to="/blogs">Blog</router-link>
            </div>
          </li>
          <li class="nav-item">
            <div>
                <router-link class="nav-link" to="/contacto">Contacto</router-link>
            </div>
          </li>
          <li class="nav-item">
            <div>
                <router-link class="nav-link" to="/iglesia">Ver Iglesia</router-link>
          
            </div>
          </li>
        </ul>
      </div>
    </nav>
   
    <router-view />
  </main>
</template>

<script>
export default {};
</script>

<style></style>
