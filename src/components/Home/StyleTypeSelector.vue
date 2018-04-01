<template>
    <b-container>
        <b-row>
            <b-col
                v-for="styleType in styleTypes"
                :key="styleType.id"
                md="6"
                lg="4"
                xl="3"
            >
                <StyleType v-bind="styleType"></StyleType>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts">
    import Vue from 'vue';

    import StyleType from './StyleType/StyleType.vue';
    import STYLE_TYPES from './StyleType/StyleTypes';


    export default Vue.extend({
        name: 'StyleTypeSelector',
        components: {
            StyleType,
        },
        data() {
            return {
                styleTypes: STYLE_TYPES,
            };
        },
    });
</script>

<style lang="scss" module>

</style>
