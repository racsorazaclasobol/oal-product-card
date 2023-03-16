import React from 'react';
import rendered from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';


describe('Pruebas en ProductImage', () => { 
    
    test('Debe de mostrar el componene correctamene con la imagen personalizada', () => { 
        
        const wrapper = rendered.create(
            <ProductImage img={ product2.img } className='test-class' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    });

    test('Debe de mostrar el componene correctamene con la imagen del producto', () => { 
        
        const wrapper = rendered.create(
            <ProductCard product={ product2 } >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

    })

})