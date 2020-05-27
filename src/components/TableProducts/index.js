import React from 'react';

import TableTrProducts from '../TableTrProducts';
import NumToReal from '../NumToReal';

import { StyledTable, StyledThDescription, StyledThQtd, StyledThValues } from './styles';

const TableProducts = ({ products, bagPrice, changeProduct }) => (

    <StyledTable>

        <thead>
            <tr>
                <StyledThDescription>Descrição</StyledThDescription>
                <StyledThQtd>Qtd</StyledThQtd>
                <StyledThValues>Valor unitário</StyledThValues>
                <StyledThValues>Valor total</StyledThValues>
            </tr>
        </thead>

        <tbody>
            { products.map( product => (
                
                <TableTrProducts
                    key={ product.id }
                    product={ product } 
                    changeProduct={ changeProduct }
                />
            ))}
        </tbody>

        { (bagPrice) && (
            <tfoot>
                <tr>
                    <th colSpan={3}>total em produtos</th>
                    <td> <NumToReal num={ bagPrice } /> </td>
                </tr>
            </tfoot>
        )}

    </StyledTable>
) 

export default TableProducts; 