import styled from 'styled-components';
import { StyledSections } from '../../components/SharedStyles';

export const StyledSection = styled(StyledSections)`
    width: 800px;
    min-height: 300px;
    margin: 25px auto 100px;
`;

export const StyledDivWrapperTable = styled.div`
    width: 90%;
    margin: 10px auto;
    border: 1px solid #f1f1f1;
    border-bottom: none;
    table {
        width: 100%;
    }
`;

export const StyledDiv = styled.div`
    box-sizing: border-box;
    padding: 10px;
    margin: 0 auto;
    text-align: center;

    h3 {

        margin: 10px auto;
        text-align: center;
        font-weight: bold;
    }

    p {
        margin: 5px auto;
        font-size: 1.1rem;

        a {
            color: #F2C777;
        }
    }
`;