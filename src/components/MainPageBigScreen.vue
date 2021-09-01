<template>
    <div>
        
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup() {
        const store = useStore()
        store.dispatch('loadLatestMovie')
    },
}
</script>