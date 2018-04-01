<template>
    <div :class="$style.root">
        <b-card
            :title="name"
            :img-src="descriptiveImagePathWithFallback"
            :img-alt="descriptiveImageAlt"
            img-top
        >
            <p class="card-text">
                <template v-if="description">
                    {{ description }}
                </template>
                <template v-else>
                    Rollsign style: {{ name }}
                </template>
            </p>
        </b-card>
        <router-link :to="location" :class="$style['link-overlay']"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Location } from 'vue-router';


    export default Vue.extend({
        name: 'StyleType',
        props: {
            id: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            routePath: {
                type: String,
                require: true,
            },
            description: String,
            descriptiveImagePath: String,
        },
        computed: {
            location(): Location {
                return { name: this.routePath };
            },
            descriptiveImagePathWithFallback(): string {
                if (this.descriptiveImagePath) {
                    return this.descriptiveImagePath;
                }

                return 'http://lorempixel.com/400/200/transport';
            },
            descriptiveImageAlt(): string {
                return `Descriptive image for the rollsign style: ${ this.name }`;
            },
        },
    });
</script>

<style lang="scss" module>
    .root {
        position: relative;

        .link-overlay {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
</style>
