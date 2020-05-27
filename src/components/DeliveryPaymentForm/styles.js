import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    position: relative;
    margin-top: 25px;

    fieldset {
        font-weight: bold;
        text-align: center;
        margin: 35px auto 10px;
    }

    div {
        margin: 20px auto;
        width: 70%;
        height: 80px;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        @media (max-width: 830px) {
            flex-direction: column;
            width: max-content;
            justify-content: start;
            height: 160px;
        }
    }

    label {
        display: flex;
        align-items: center;
        height: 30px;
        line-height: 30px;
        margin: 0 15px;
        font-size: 1.1rem;
    }
`;

export const StyledInput = styled.input`
    margin-left: 300px;
    width: 150px;
    position: absolute;
    left: 290px;
    top: 80px;
    text-align: center;

    @media (max-width: 830px) {
        top: 140px;     
        left: 175px;
    }
`;