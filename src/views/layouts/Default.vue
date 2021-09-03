<template>
<div class="default-container">
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>

  <div class="content">
     <router-view></router-view>
  </div>

 
</div>

</template>

<style scoped>
.default-container {
  @apply grid place-items-center bg-gradient-to-r from-gray-800 to-gray-900;
}
#nav{
  @apply mt-10 text-gray-50;
}
.content{
  @apply overflow-auto h-[90vh] mt-16 w-4/12;
}
</style>