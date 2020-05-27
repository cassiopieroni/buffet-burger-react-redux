import React from 'react';

import { StyledDiv } from './styles';

const DeliveryAddressForm = ({ fetchingAddress, changeAddress, addressForm }) => {

    const { clientName, cep, logradouro, num, complemento, bairro, localidade, uf } = addressForm;

    return (
        
        <StyledDiv>

            <div>
                <input 
                    type="text" name="clientName" placeholder='SEU NOME: ' 
                    size='50' required
                    value={ clientName } onChange={ changeAddress } 
                />

                <input 
                    type="text" name="cep" placeholder='CEP: 00000-000' 
                    maxLength={ 9 } size='15' required maxlength="9"
                    value={ cep } onBlur={ fetchingAddress } onChange={ changeAddress } 
                />
            </div>

            <div>
                <input 
                    placeholder='RUA:'
                    name="logradouro" type="text" id="rua" size="55"
                    required value={ logradouro } onChange={ changeAddress } 
                />

                <input 
                    placeholder='NUM:'
                    name="num" type="text" id="rua" size="10" 
                    required value={ num } onChange={ changeAddress }
                />
            </div>
            
            <div>

                <input 
                    placeholder='COMPLEMENTO:'
                    name="complemento" type="text" id="rua"   size='60'
                    value={ complemento } onChange={ changeAddress }
                />

                <input 
                    placeholder='UF:'
                    name="uf" type="text" id="uf" size="5" maxlength="2" minlength="2"
                    required value={ uf } onChange={ changeAddress }
                />

            </div>

            <div>
                <input 
                    placeholder='CIDADE:'
                    name="localidade" type="text" id="cidade" size="35" 
                    required value={ localidade } onChange={ changeAddress }
                />

                <input 
                    placeholder='BAIRRO:'
                    name="bairro" type="text" id="bairro" size='30' 
                    required value={ bairro } onChange={ changeAddress }
                />
            </div>

        </StyledDiv>
    )
}

export default DeliveryAddressForm;