import React, { useEffect } from 'react';
import { StyledLi } from './styles';

const Message = ({ message, removeMessage }) => {

    useEffect( () => {

        setTimeout(() => removeMessage(message), msgDelay);
    }, [ removeMessage, message ]);

    const isError = (message.type === 'error');
    const msgDelay = 2500;
    
    return (
	
    	<StyledLi isError={ isError } delay={ (msgDelay / 1000) + .1 } >

        
            <p> { message.content } </p>
        
        </StyledLi>
	);
}

export default Message;