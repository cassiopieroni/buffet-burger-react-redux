import styled from 'styled-components';
import { StyledButtons } from '../SharedStyles';

export const StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    a{
        text-decoration: none;
    }
`;

export const StyledButton = styled(StyledButtons)`
    position: fixed;
    top: 60%;
    left: 10%;
    background-color: rgba(242,82,82,.5);

    &:hover {
        background-color: rgba(242,82,82,1);
    }
    
    p {
        margin: 0 40px 0 20px;
        color: #f4f4f4;
    }

    @media (max-width: 600px) {
        position: absolute;
        top: 50%;
    }

    @media (min-width: 1920px) {
        position: absolute;
        top: 50%;
    }
`;