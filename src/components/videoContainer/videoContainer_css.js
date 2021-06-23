import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Container = styled.div`
    align-items: center;
    display: flex; 
    flex-basis: 33%;
    flex-direction: column;
    justify-content: center; 
    margin-top: 8vh;
    filter: drop-shadow(0 0 0.3rem ${mainCss.mainOrange});
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .container__area-size {
        align-items: center;
        background-color: ${mainCss.mainBlack};
        display: flex;
        filter: drop-shadow(0 5px 0.3rem rgba(0, 0, 0, 0.1));
        flex-direction: column;
        width: 80%;
    }

    

    @media screen and (max-width: 900px) { 
        margin-top: 6vh;
        flex-basis: 50%;
    }

    @media screen and (max-width: 650px) { 
        margin-top: 4vh;
        flex-basis: 100%;
    }
`

export const ImageContainer = styled.div`
    align-items: center;
    align-self: stretch;
    background-color: ${mainCss.mainBlack};
    display: flex;
    flex: 1;
    height: 100%;
    position: relative;
    width: auto;

    a {
        cursor: pointer;
        height: 100%;
        position: absolute;
        width: 100%;
    }

    img {
        width: 100%;
    }
`;

export const ItemDescription = styled.div`
    background-color: ${mainCss.mainOrange};
    color: ${mainCss.mainBlack};
    font-size: 15px;
    height: 100%;
    max-height: 110px;
    min-height: 110px;
    overflow: hidden;
    padding: 5px 20px 5px 20px;
    width: 100%;
`;

export const CreatedBy = styled.div`
    align-items: center;
    background-color: ${mainCss.mainBlack};
    color: white;
    display: flex;
    justify-content: flex-start;
    font-size: 12px;
    padding: 5px 0px 5px 20px;
    width: 100%;

    p:not(:first-child) {
        margin-left: 8px;
    }
`;

export const Title = styled.div`
    align-items: center;
    background-color: ${mainCss.mainOrange};
    color: ${mainCss.mainBlack};
    display: flex;
    justify-content: center;
    padding: 15px 20px 15px 20px;
    min-height: 110px;
    text-align: center;
    width: 100%;

    p {
        line-height: 1.2em;
        font-size: 20px;
        font-weight: 600;
    }
`;