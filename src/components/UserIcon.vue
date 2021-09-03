<template>
    <div id='root'>

    </div>
</template>

<script>
import {userinitial} from 'adi-userinitials'
import {onMounted} from 'vue'
export default {
    setup() {
        onMounted(()=>{
            userinitial({
            name: "adityask2194@gmail.com",
            height: "40px",
            width: "40px",
            root: "#root",
            returnHTML: false,
            avatarImage: ''
        })
        })
    },
}
</script>
