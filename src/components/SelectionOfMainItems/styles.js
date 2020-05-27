import styled from 'styled-components';
import { StyledDivsBuffetWrapper } from '../SharedStyles';


export const StyledDiv = styled(StyledDivsBuffetWrapper)``;


export const StyledSelect = styled.select`
    border: 1px solid gray;
    min-width: max-content;
    width: 290px;
    max-width: 100%;
    height: 45px;
    margin: 5px auto 5px 0;
    padding-left: 15px;
    font-weight: bold;
    font-size: .9rem;
    background-color: #012840;
    color: #f1f1f1;
    transition: all .2s ease-in-out;
    box-shadow: 2px 2px 3px black;
    box-sizing: border-box;

    &:hover{
        box-shadow: 3px 3px 3px black;
        border: 1px solid #ffffff;
    }        

    option{
        font-weight: bold;
        background-color: rgba(01,40,64,.9);
        color: #f1f1f1;
        text-indent: 0px;
    }
`;