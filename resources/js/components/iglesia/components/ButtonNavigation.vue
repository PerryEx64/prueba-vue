<template>
  <div>
    <router-link class="nav-link" to="/iglesia">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
    name: "ButtonNavigation",
    props: {
        title: String,
        route: String
    }
}
</script>

<style>

</style>