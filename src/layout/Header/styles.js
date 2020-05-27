import styled from 'styled-components';

export const StyledHeader = styled.header`
    min-width: 600px;
    background-color: rgba(01,40,64,.5);
    transition: all .3s ease-in-out;

    &:hover {
        background-color: rgba(01,40,64,.8);
    }

    nav {
        height: 100px;
        box-sizing: border-box;
        padding: 30px 20px;
        display: flex;
        justify-content: space-between;
    }
    
    a {
        text-decoration: none;
        transition: all .3s ease-in-out;

        &:hover {
            transform: translateY(-5px) scale(1.02);   
        }
    }

    h1{
        padding: 10px 20px;
        height: 40px;
        line-height: 20px;
        font-size: 2.3rem;
        font-weight: bold;
        font-style: italic;
        color: #F25252;
        text-shadow: #F2C777 1px 1px 1px;
        transition: all .3s ease-in-out;
    }
`;

export const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 50px;

    img {
        padding: 5px;
        margin-left: 15px;
        cursor: pointer; 
    }

    div {
        position: relative;
    }
    
    div p {
        position: absolute;
        bottom: 15px;
        left: 65px;
        font-size: 1.1rem;
        color: #f4f4f4;
    }
`;