import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        @media (max-width: 830px) {

            input:first-child {
                width: 280px;
            }
            input:last-child {
                width: 200px;
            }
        }
    }
`;