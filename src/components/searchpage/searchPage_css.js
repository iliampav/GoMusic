import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

import stagePicture from '../../images/stagepicture.jpg';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100vw;

    #container__background-img {
        background-image: url(${stagePicture});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        bottom: 0;
        height: 100%;
        left: 0;
        opacity: 0.65;
        position: absolute;
        right: 0;
        width: 100%;
        top: 0;
        z-index: -1;
    }

    h1 {
        background-color: ${mainCss.mainGrey};
        color: ${mainCss.mainOrange};
        font-family: ${mainCss.tittleFont};
        font-size: 25px;
        font-weight: 600;
        letter-spacing: 10px;
        padding: 10px 0 10px 10px;
    }

    img {
        flex: 1;
        height: 100vh;
        object-fit: cover;
        position: absolute;
        width: 100vw;
    }

    @media screen and (max-width: 700px) { 
        
    }
`
export const Search = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    position: relative;
    width: 90%;

    p {
        background-color: ${mainCss.mainGrey};
        color: ${mainCss.mainOrange};
        font-size: 16px;
        margin: 20px;
        padding: 10px;
    }

    input {
        background: ${mainCss.mainOrange};
        border: none;
        font-size: 1.4em;       
        padding: 10px;
        width: auto;

        &:focus {
            border: none;
            outline: 0;                
        }

        &::placeholder {
            color: ${mainCss.orangeInputTextColor};
            font-size: 1rem;
        }
    }

    div {
        background: ${mainCss.mainOrange};
    }

    button {
        background: ${mainCss.mainOrange};
        border:none;           
        border-left: 1px solid rgba(23,23,23,0.1);
        cursor: pointer;  
        display: inline-block;  
        font-size: 1.4em;
        padding: 10px;
        transition: ease-out 0.5s;
        -webkit-transition: ease-out 0.4s;
        -moz-transition: ease-out 0.4s;

        &:hover {
            background: ${mainCss.mainOrangeHover};
        }
    }
`
