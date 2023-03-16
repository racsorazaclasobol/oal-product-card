import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductoCard";

export interface ProductButtonProps {
    className?  :string;
    style?      : React.CSSProperties;
}

export const ProductButton = ({ className }: ProductButtonProps) => {
    
    const { increaseBy, counter, maxCounter } = useContext( ProductContext );

    const isMaxReached = useCallback(() =>  !!maxCounter && counter === maxCounter, [counter, maxCounter],);
    
    
    return (
        <div  className={`buttonsContainer ${ className }`}>

            <button className='buttonMinus' onClick={ () => increaseBy( -1 ) }>
                -
            </button>

            <div className='countLabel'> 
                { counter } 
            </div>

            <button className={`buttonAdd ${ isMaxReached() && 'disabled' }`} onClick={ () => increaseBy( 1 ) } >
                +
            </button>
            
        </div>
    )
}