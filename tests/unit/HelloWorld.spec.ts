import { shallow } from '@vue/test-utils';
import { expect } from 'chai';

import HelloWorld from '@/components/HelloWorld.vue';


describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallow(HelloWorld, {
            propsData: { msg },
        });
        expect(wrapper.text()).to.include(msg);
    });
});
