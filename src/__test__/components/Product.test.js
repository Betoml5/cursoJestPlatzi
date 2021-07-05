import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Product from '../../components/Product';
import ProductMock from '../../__mocks__/productMock';
import { expect } from '@jest/globals';

describe('<Product/>', () => {
  test('should render product component', () => {
    //Shallow se usa cuando es algo particular y no necesitamos del DOM
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );

    expect(product.length).toEqual(1);
  });

  test('should click buy button', () => {
    const handleAddToCart = jest.fn();
    //Mount lo usamos cuando necesitamos el DOM
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );

    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
