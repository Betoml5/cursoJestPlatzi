import React from 'react';

import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/providerMock';
import Header from '../../components/Header';
import { expect } from '@jest/globals';
import { create } from 'react-test-renderer';

describe('<Header/>', () => {
  test('should return header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.length).toEqual(1);
  });

  test('should render title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapchot', () => {
  test('should comprobe Snapchot Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});
