import React from 'react';
import NumToReal from '../NumToReal';

import { StyledDiv, StyledLi } from './styles';

const ExtraItem = ({ item, toggleExtraItem, currentItemsOnDish }) => (

    <StyledLi>
        <label>

            <input 
                type="checkbox"
                value={ item.value }
                onChange={ () => toggleExtraItem(item) }
                checked={ currentItemsOnDish.some( extra => extra.value === item.value ) } 
            />
            
            { item.description } <span> <NumToReal num={ item.price } /> </span>

        </label>
    </StyledLi>
);


const SelectionOfExtraItems = ({ toggleExtraItem, allExtras, currentItemsOnDish }) => (

    <StyledDiv>
        <h3>Adicione: </h3>

        <ul>
            { allExtras.map( item => (
                
                <ExtraItem 
                    key={ item.value } 
                    item={ item } 
                    toggleExtraItem={ toggleExtraItem }
                    currentItemsOnDish={ currentItemsOnDish }    
                />
            ))}
        </ul>
        
    </StyledDiv>
);

export default SelectionOfExtraItems;