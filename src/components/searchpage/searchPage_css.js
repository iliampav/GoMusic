import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

import stagePicture from '../../images/stagepicture.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    position: relative;

    #container__background-img {
        width: 100%;
        height: 100%;
        background-image: url(${stagePicture});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.65;
    }

    h1 {
        background-color: ${mainCss.mainGrey};
        color: ${mainCss.mainOrange};
        padding: 10px 0 10px 10px;
        font-size: 25px;
        font-family: ${mainCss.tittleFont};
        letter-spacing: 10px;
        font-weight: 600;
    }

    img {
        flex: 1;
        object-fit: cover;
        height: 100vh;
        width: 100vw;
        position: absolute;
    }

    @media screen and (max-width: 700px) { 
        
    }
`
export const Search = styled.div`
        position: relative;
    width: 90%;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        margin: 20px;
        font-size: 16px;
        color: ${mainCss.mainOrange};
        background-color: ${mainCss.mainGrey};
        padding: 10px;
    }

    input {
        background: ${mainCss.mainOrange};
        border: none;
        font-size: 1.4em;       
        width: auto;
        padding: 10px;

        &:focus {
            border: none;
            outline: 0;                
        }
    }

    div {
        background: ${mainCss.mainOrange};
    }

    button {
        background: ${mainCss.mainOrange};
        border:none;           
        padding: 10px;
        font-size: 1.4em;
        border-left: 1px solid rgba(23,23,23,0.1);
        cursor: pointer;  
        display: inline-block;  
        -webkit-transition: ease-out 0.4s;
        -moz-transition: ease-out 0.4s;
        transition: ease-out 0.5s;

        &:hover {
            background: ${mainCss.mainOrangeHover};
        }
    }
`
