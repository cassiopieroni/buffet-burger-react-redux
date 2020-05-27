import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledUl } from './styles';
import burgerIcon from '../../assets/burger-45x45-white.png';
import bagIcon from '../../assets/bag-50x50.png';

export default ({ bagLength }) => (

    <StyledHeader>
        <nav>

            <NavLink to="/">
                <h1>Buffet Burger</h1>
            </NavLink>
            
            <StyledUl>
                
                <NavLink to='/buffet'>
                    <img src={burgerIcon} alt='hamburger' />
                </NavLink>
                
                <NavLink to='/shopping-bag'> 
                    <div> 
                        <img src={bagIcon} alt='sacola de compras' /> 
                        <p>{`${bagLength}`}</p>
                    </div>
                </NavLink>

            </StyledUl>
            
        </nav>
    </StyledHeader>
);

