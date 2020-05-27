import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: rgba(01,40,64,.5);
    transition: all .3s ease-in-out;
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &:hover {
        background-color: rgba(01,40,64,.8);
    }

    address{
        margin-bottom: 10px;
        width: max-content;
        font-weight: bold;
    }

    div {
        width: max-content;
        font-weight: bold;
    }
    
    a, p {
        color: #f1f1f1;
    }
`;