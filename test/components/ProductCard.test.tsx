import React from 'react';
import rendered, { act } from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/products'

describe('ProductTitle', () => {

	test('Debe de mostrar el componente', () => {

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

    test('Debe de aumentar el contador', () => { 
        
        const wrapper = rendered.create(
			<ProductCard product={ product1 }>
				{
					({ counter, increaseBy }) => (
                        <>
                            <h1>Test Product</h1>
                            <span> { counter } </span>
                            <button onClick={ () => increaseBy( 1 ) } ></button>
                        </>					
					)
				}
			</ProductCard>
		);
        let wrapperJSON = wrapper.toJSON();
        expect(wrapper.toJSON()).toMatchSnapshot();

       act( () => { ( wrapperJSON as any ).children[2].props.onClick() } );
       
       wrapperJSON = wrapper.toJSON();
       
       expect( ( wrapperJSON as any ).children[1].children[1] ).toBe( '1' );

    })
});
