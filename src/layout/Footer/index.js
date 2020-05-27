import React from 'react';
import { StyledFooter } from './styles';

export default () => (
    <StyledFooter>
        <address>
            <a href='mailto:#'>oi@buffetburger.com</a>
        </address>
        <div>
            <p>
                {`fontes:  `}
                <a href='https://icons8.com.br/icons' target='_blank'>
                    ícones
                </a>
                {`  /  `}
                <a href='https://www.pexels.com/pt-br/foto/alface-alimento-almoco-cheeseburger-1639562/' target='_blank'>
                    imagem
                </a>
            </p>
        </div>
    </StyledFooter>
);