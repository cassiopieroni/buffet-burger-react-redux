import React from 'react';
import NumToReal from '../NumToReal';
import { StyledTr, StyledDiv } from './styles';
import decBtn from '../../assets/dec-30x30.png';
import addBtn from '../../assets/add-30x30.png';


const ChangeableTd = ({ product, changeProduct }) => (
    <td>
        <StyledDiv>
        
            <button onClick={ () => changeProduct('decrease', product) }>
                <img src={ decBtn } />
            </button> 
            
            <span>{ product.quantity }</span> 
            
            <button onClick={ () => changeProduct('increase', product) }>
                <img src={ addBtn } />
            </button>
        
        </StyledDiv>
        
        <p onClick={ () => changeProduct('delete', product) } >excluir</p>
    
    </td>
);


const TableTrProducts = ({ product, changeProduct }) => (
    
    <StyledTr>
    
        <td>{ product.description }</td>
        
        { (changeProduct) ? (

            <ChangeableTd
                product={ product }
                changeProduct={ changeProduct }
            />
        ) : (
            
            <td>{ product.quantity }</td>
        )}
        
        <td> <NumToReal num={ product.unitPrice } /> </td>
        
        <td> <NumToReal num={ product.subtotal } /> </td>

    </StyledTr>
);

export default  TableTrProducts;