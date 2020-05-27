import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeMessage } from '../../store/ducks/messages';

import Message from '../../components/Message';

import { StyledUl } from './styles';


const Messages = () => {

    const dispatch = useDispatch();
    const { messages } = useSelector( state => state.messages );

    const handleRemoveMessage = msg => dispatch( removeMessage(msg));


    if (!messages.length)
        return null;


    return (

        <StyledUl>
            { messages.map( (msg, i) => (
                
                <Message key={i} message={msg} removeMessage={ handleRemoveMessage } />
            ))}
        </StyledUl>
    )
}

export default Messages;

