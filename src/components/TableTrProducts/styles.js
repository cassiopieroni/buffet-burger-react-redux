import styled from 'styled-components';

export const StyledTr = styled.tr`
    text-align: center;
    background-color: #f1f1f1;
    box-sizing: border-box;
    border-top: 5px solid #012840;
    border-bottom: 5px solid #012840;
    
    td {
        height: 70px;
        vertical-align: middle;
        padding: 10px 5px;
        box-sizing: border-box;
        line-height: 1.5;
    }

    td p {
        cursor: pointer;
        text-decoration: underline;
        width: max-content;
        padding: 5px;
        margin: 0 auto;
        transition: all .1s ease-in-out;

        &:hover {
            color: red;
        }
    }
`;

export const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;

    button {
        cursor: pointer;
        padding: 3px 0;
        border: none;

        img {
            transition: all .2s ease-in-out;
        }

        &:hover img {
            transform: translateY(-3px);
        }
    }

    span {
        margin: 0 5px;
    }
`;