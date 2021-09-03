<template>
    <ul class="menu-layout">
        <SearchIcon />
        <NavItem path="/browse" text="KIDS"></NavItem>
        <NavItem path="/browse" text="DVD"></NavItem>
        <NavItem path="/browse" text="Notification"></NavItem>
        <UserIcon />
    </ul>
</template>

<script>
import NavItem from './NavItem.vue'
import SearchIcon from './SearchIcon.vue'
import UserIcon from './UserIcon.vue'
export default {
    components:{
        NavItem,
        SearchIcon,
        UserIcon
    },
    setup() {
        
    },
}
</script>