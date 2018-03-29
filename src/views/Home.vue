<template>
    <div id="home">
        <StyleTypeSelector/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    import StyleTypeSelector from '../components/Home/StyleTypeSelector.vue';


    export default Vue.extend({
        name: 'Home',
        components: {
            StyleTypeSelector,
        },
    });
</script>
