import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addMessage } from '../../store/ducks/messages';
import { changeAddressValue, clearAddressFields, waitingFetchAddress, changePayment, clearAddress } from '../../store/ducks/delivery';
import { addNewConfirmedOrder } from '../../store/ducks/confirmedOrders';
import { clearShoppingBag } from '../../store/ducks/shoppingBag';

import { fetchAddress } from '../../store/fetchActions';

import TableProductsSlideAnimation from '../../components/TableProductsSlideAnimation';
import DeliveryAddressForm from '../../components/DeliveryAddressForm';
import DeliveryPaymentForm from '../../components/DeliveryPaymentForm';
import NumToReal from '../../components/NumToReal';

import { StyledSection, StyledForm, StyledDiv, StyledButton } from './styles';
import confirmIcon from '../../assets/confirm-45x45.png';


const Delivery = props => {

    const dispatch = useDispatch();

    const { isConfirmedBag, products, bagPrice } = useSelector( state => state.shoppingBag );
    const { form, isValidCep, deliveryFee, isFetchingData } = useSelector( state => state.delivery );


    const handleOnBlurFetchAddress = () => {

        const cep = form.address.cep.replace(/\D/g, '');
        const validateCep = /^[0-9]{8}$/;

        if (cep !== '') {

            if (validateCep.test(cep)){
                dispatch( waitingFetchAddress());
                dispatch( fetchAddress(cep))
            
            } else {
                dispatch( addMessage({ type: 'error', content: 'CEP inválido' }));
                dispatch( clearAddressFields());
            }

        } else {

            dispatch( clearAddressFields());
        }
    }


    const handleChangeAddress = (e) => {

        const { name, value } = e.target;
        dispatch( changeAddressValue({ name, value }))
    }


    const handleChangePayment = e => {

        const { name, value } = e.target;
        dispatch( changePayment({ name, value }));
    }


    const handleClickSubmit = e => {

        e.preventDefault();

        if (isValidCep) {
            
            const orderData = { products, bagPrice, form, deliveryFee };
            confirmingOrder(orderData);
            props.history.push('/order');
        
        } else {

            dispatch( addMessage({ type: 'error', content: 'CEP não encontrado!' }));
        }
    }


    const confirmingOrder = order => {
    
        dispatch( addNewConfirmedOrder(order));
        dispatch( addMessage({ type: 'success', content: 'pedido confirmado!' }));
        dispatch( clearShoppingBag());
        dispatch( clearAddress());
    }


    if ( !isConfirmedBag ){
        dispatch( addMessage({ 
            type: 'error', 
            content: 'Confirme sua sacola de compras' 
        }));
        return <Redirect to='/shopping-bag' />;
    }


    return (

        <StyledSection>
            
            <h2>Dados de entrega</h2>

            <TableProductsSlideAnimation products={ products } bagPrice={ bagPrice } />

            <StyledForm onSubmit={ handleClickSubmit } >

                <DeliveryAddressForm 
                    fetchingAddress={ handleOnBlurFetchAddress }
                    changeAddress={ handleChangeAddress }
                    addressForm={ form.address }
                />

                <StyledDiv>
                    <p>Taxa de entrega: 
                        <span>{ deliveryFee ? <NumToReal num={deliveryFee} /> : '...' }</span>
                    </p>
                    
                    <p>Total a pagar: <span><NumToReal num={ bagPrice + deliveryFee} /></span></p>
                </StyledDiv>

                <DeliveryPaymentForm
                    paymentForm={ form.payment }
                    changePayment={ handleChangePayment }
                />

                <StyledButton type='submit' disabled={ isFetchingData } >
                    <img src={ confirmIcon } alt='confirmar' />
                    <p>Confirmar dados e enviar pedido</p>
                </StyledButton>

            </StyledForm>

        </StyledSection>
    )
};

export default Delivery;