import _ from 'lodash';


interface RawStyleType {
    id: number;
    name: string;
    routePath?: string;
    description: string;
    descriptiveImagePath: string;
}

interface StyleType extends RawStyleType {
    routePath: string;
}

const STYLE_TYPE_IDS: { [key: string]: number; } = {
    JR_WEST: 0,
    JR_EAST: 1,
};

const rawStyleTypes: RawStyleType[] = [
    {
        id: STYLE_TYPE_IDS.JR_WEST,
        name: 'JR West',
        description: 'Rollsign styles from the Japan Railway West company.',
        descriptiveImagePath: '',
    },
    {
        id: STYLE_TYPE_IDS.JR_EAST,
        name: 'JR East',
        description: 'Rollsign styles from the Japan Railway East company.',
        descriptiveImagePath: '',
    },
];

const STYLE_TYPES: StyleType[] = _.map(
    rawStyleTypes,
    (value) => {
        if (!value.routePath) {
            value.routePath = _.kebabCase(value.name);
        }

        return value as StyleType;
    }
);

export { STYLE_TYPE_IDS };
export default STYLE_TYPES;
