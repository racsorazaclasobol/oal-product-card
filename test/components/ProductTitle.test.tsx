import React from 'react';
import rendered from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/products'

describe('ProductTitle', () => {
    test('Debe de mostrar el componene correctamene con el titulo personalizado', () => {

		const wrapper = rendered.create(<ProductTitle title="Test Product" />);

		expect(wrapper.toJSON()).toMatchSnapshot();

    });

	test('Debe de mostrar el componene correctamene con el titulo del producto', () => {

		const wrapper = rendered.create(
			<ProductCard product={ product1 }>
				{
					() => (
						<ProductTitle />
					)
				}
			</ProductCard>
		);

		expect(wrapper.toJSON()).toMatchSnapshot();
		
    });
});
