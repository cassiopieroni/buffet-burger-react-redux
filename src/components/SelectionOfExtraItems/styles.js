import styled from 'styled-components';
import { StyledDivsBuffetWrapper } from '../SharedStyles';


export const StyledDiv = styled(StyledDivsBuffetWrapper)``;

export const StyledLi = styled.li`
    margin: 5px 0;
    font-weight: bold;

    label input {
        margin-right: 10px;
    }

    label span{
        font-size: .8rem;
        margin-left: 2px;
    }
`;