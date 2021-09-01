<template>
    <List>
        <router-link :to="path">{{text}}</router-link>
    </List>
</template>

<script>
import List from './List.vue'

export default {
components:{
    List,
},
props:{
        path:{
            type: String
        },
        text:{
            type: String
        }
}, 
setup(props) {
        console.log(props.path)
    },
}
</script>