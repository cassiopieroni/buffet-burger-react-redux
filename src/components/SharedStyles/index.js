import styled from 'styled-components';


export const StyledSectionsBg = styled.section`
    background-color: rgba(01,40,64,.95);
    transition: all .3s ease-in-out;
    color: #f1f1f1;
    box-shadow: 4px 4px 3px black;
    box-sizing: border-box;
    border-radius: 3px;

    &:hover {
        background-color: rgba(01,40,64,1);
    }
`;

export const StyledSections = styled(StyledSectionsBg)`

    padding: 15px 0 30px;

    h2 {
            width: 100%;
            height: 60px;
            line-height: 60px;
            margin: 20px auto;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
        }

    @media (max-width: 830px) {
        width: 550px;
    }
`;

export const StyledDivsBuffetWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0;

    h3 {
        font-size: 1.1rem;
        width: 200px;
        font-weight: bold;
        text-align: start;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 1.5;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-around;
        width: 300px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-around;
        width: 300px;
    }
`;


export const StyledButtons = styled.button`
    position: relative;
    background-color: #F25252;
    border-radius: 2px;
    margin: 15px auto;
    padding: 10px 20px;
    border: none;
    box-shadow: 3px 3px 5px black;
    box-sizing: border-box;
    font-family: arial;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 5px 5px 5px black;
    }

    &:hover img {
        transform: translateY(-4px);
    }

    img { 
        margin: 0 10px;
        transition: all .3s ease-in-out;
    }

    p {
        margin: 0 10px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #f1f1f1;
    }
`;