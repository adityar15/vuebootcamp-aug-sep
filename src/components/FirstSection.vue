<template>
    <ul class="menu-layout">
        <NavItem path="/browse" text="Home" />
        <NavItem path="/browse" text="TV Shows" />

        <NavItem path="/browse" text="Movies" />
        <NavItem path="/browse" text="New & Popular" />
        <NavItem path="/browse" text="My List" />
        <NavItem path="/browse" text="Watch Again" />

    </ul>
</template>

<script>
import NavItem from './NavItem.vue'
export default {
    components:{
        NavItem
    },
    setup() {
        
    },
}
</script>