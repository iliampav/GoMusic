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
        width: 80%;
        display: flex;
        filter: drop-shadow(0 5px 0.3rem rgba(0, 0, 0, 0.1));
        flex-direction: column;
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
    align-self: stretch;
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    width: auto;
    background-color: ${mainCss.mainBlack};

    a {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    img {
        width: 100%;
    }
`;

export const ItemDescription = styled.div`
    width: 100%;
    padding: 5px 20px 5px 20px;
    font-size: 15px;
    color: ${mainCss.mainBlack};
    background-color: ${mainCss.mainOrange};
    min-height: 110px;
    height: 100%;
`;

export const CreatedBy = styled.div`
    font-size: 12px;
    width: 100%;
    padding: 5px 0px 5px 20px;
    color: white;
    background-color: ${mainCss.mainBlack};
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p:not(:first-child) {
        margin-left: 8px;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px 15px 20px;
    color: ${mainCss.mainBlack};
    background-color: ${mainCss.mainOrange};
    width: 100%;
    min-height: 110px;
    text-align: center;

    p {
        line-height: 1.2em;
        font-size: 20px;
        font-weight: 600;
    }
`;