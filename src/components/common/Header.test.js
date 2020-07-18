import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('contains 3 NavLinks via shallow', () => {
    const numLinks = shallow(<Header />).find('NavLink').length;
    expect(numLinks).toEqual(3);
});

it('contains 3 anchors via mount', () => {
    const anchors = mount(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ).find('a').length;

    expect(anchors).toEqual(3);
});
