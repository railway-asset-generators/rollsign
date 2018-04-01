import _ from 'lodash';
import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import GeneratorJREast from './components/Generator/GeneratorJREast/GeneratorJREast.vue';
import GeneratorJRWest from './components/Generator/GeneratorJRWest/GeneratorJRWest.vue';
import STYLE_TYPES, { STYLE_TYPE_IDS } from './components/Home/StyleType/StyleTypes';
import Generator from './views/Generator.vue';
import Home from './views/Home.vue';


Vue.use(Router);


const typeGeneratorMapping = {
    [STYLE_TYPE_IDS.JR_WEST]: GeneratorJRWest,
    [STYLE_TYPE_IDS.JR_EAST]: GeneratorJREast,
};

const generatorRoutes: RouteConfig[] = _.map(STYLE_TYPES, (styleType) => {
    return {
        path: styleType.routePath,
        name: styleType.routePath,
        component: typeGeneratorMapping[styleType.id],
    };
});

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/generator',
            name: 'generator',
            component: Generator,
            children: generatorRoutes,
        },
    ],
});
