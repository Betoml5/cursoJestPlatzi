import { expect } from '@jest/globals';
import reducer from '../../reducers';
import productMock from '../../__mocks__/productMock';

describe('Reducers', () => {
  test('should return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('should add to cart', () => {
    const initialState = {
      cart: [],
    };

    const payload = productMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [productMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
