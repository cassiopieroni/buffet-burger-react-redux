import React from 'react';

import { StyledDiv, StyledInput } from './styles'

const DeliveryPaymentForm = ({ paymentForm, changePayment }) => {

    const methods = [ 'cartão de débito', 'cartão de crédito', 'dinheiro' ]

    return (
        <StyledDiv>
            
            <fieldset>Forma de pagamento (pague na entrega):</fieldset>

            <div>

                { methods.map( method => (

                    <label key={ method } >

                        <input
                            type="radio"
                            name='method'
                            value={ method }
                            checked={ paymentForm.method === method }
                            onChange={ changePayment }
                            required
                        />

                        { method }

                    </label>
                ))}

            </div>

            { (paymentForm.method === 'dinheiro') && (
                    
                <StyledInput 
                    placeholder='TROCO P/:'
                    type='number' name='changeOfMoney'
                    value={ paymentForm.changeOfMoney } onChange={ changePayment } 
                />
            )}

        </StyledDiv>
    )
}

export default DeliveryPaymentForm;