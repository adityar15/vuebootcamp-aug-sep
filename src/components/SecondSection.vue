<template>
    <ul class="menu-layout">
        <SearchIcon />
        <NavItem path="/browse" text="KIDS"></NavItem>
        <NavItem path="/browse" text="DVD"></NavItem>
        <NavItem path="/browse" text="Notification"></NavItem>
        <NavItem path="/browse" text="User Icon"></NavItem>
    </ul>
</template>

<script>
import NavItem from './NavItem.vue'
import SearchIcon from './SearchIcon.vue'
export default {
    components:{
        NavItem,
        SearchIcon
    },
    setup() {
        
    },
}
</script>