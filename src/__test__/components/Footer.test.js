import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';
import { expect } from '@jest/globals';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('should render footer component', () => {
    expect(footer.length).toEqual(1);
  });

  test('should render the title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('should comprobe Footer component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
