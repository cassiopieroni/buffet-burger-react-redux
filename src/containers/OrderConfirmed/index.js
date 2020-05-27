import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import TableProducts from '../../components/TableProducts';
import NumToReal from '../../components/NumToReal';

import { StyledSection, StyledDivWrapperTable, StyledDiv } from './styles';


const OrderConfirmed = () => {
    
    const confirmedOrder = useSelector( state => state.confirmedOrders[0] );

    if (!confirmedOrder) {
        return (
            <StyledSection>
                <h2>Detalhes do pedido:</h2>
                <StyledDiv>
                    <br/><p>Vôce ainda não possui pedidos confirmados!</p>
                    <br/><p>Verifique sua sacola de compras <NavLink to='/shopping-bag'>clicando aqui.</NavLink></p>
                </StyledDiv>
            </StyledSection>
        )
    }

    const { address, deliveryFee, products, productsPrice, payment, amount } = confirmedOrder;

    return (
        
        <StyledSection>
            
            <h2>Pedido confirmado</h2>
            <h2>Resumo do seu pedido:</h2>

            <StyledDivWrapperTable>
                <TableProducts products={ products } subTotal= { productsPrice } />
            </StyledDivWrapperTable>

            <h2>Dados de entrega:</h2>

            <StyledDiv>
                <p>{address.clientName}</p>
                <p>{`cep: ${address.cep}`}</p>
                <p>{`${address.logradouro}, ${address.num} ${address.complemento}`}</p>
                <p>{`${address.bairro}. ${address.localidade}, ${address.uf}`}</p>
            </StyledDiv>

            <StyledDiv>
                <h3>Taxa de entrega: <NumToReal num={ deliveryFee } /> </h3>
                <h3>Total a pagar: <NumToReal num={ amount } /> </h3>
            
                { (payment.method === 'dinheiro') ? (
                    <p>
                        {`Pague na entrega, em ${payment.method}`} 
                        { payment.changeOfMoney && ` (troco para: ${payment.changeOfMoney})` } 
                    </p>
                ) : (
                    <p>{`Pague na entrega com ${payment.method}.`}</p>
                )}
            </StyledDiv>

            <StyledDiv>
                <p>Número do pedido: <span>xxxxx</span></p>
                <p>Nosso contado: (11) xxxxx-xxxx </p>
            </StyledDiv>
        </StyledSection>
    )
}

export default OrderConfirmed;