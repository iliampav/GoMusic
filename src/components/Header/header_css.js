import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Area = styled.div`
    align-items: center;
    background-color: ${mainCss.mainOrange};
    border-bottom: 1px solid ${mainCss.mainBlack};
    display: flex; 
    justify-content: center;
    height: 80px;
    width: 100vw;
    position: fixed;
    top:0;
    left: 0;
    z-index: 50;

    @media screen and (max-width: 900px) { 
        background-color: ${mainCss.mainBlack};
        border-bottom: 2px solid ${mainCss.mainOrange};
    }
`;

export const Container = styled.div`
    align-items: center;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;  
    max-width: 1300px;
    width: 100%;
    
    div {
        display: flex;
        width: 100%;
    }

    .container__tittle {
        justify-content: center;
    }

    .container__picture {
        justify-content: flex-end;

    }    

    .container__search {
        font-weight: 500;
        justify-content: flex-start;
        margin-left: 10px;
        margin:  9px 22px 9px 6px;

        input {            
            background: ${mainCss.mainBlack};
            border: none;
            color: ${mainCss.mainOrange};
            font-size: 1em;  
            font-weight: 600;
            padding: 10px;
            width: 100%;

            &:focus {
                color: ${mainCss.mainOrange};
                border: none;
                outline: 0;               
            
            }

            &::placeholder {
                color: ${mainCss.mainOrange};
                font-size: 1rem;
                font-weight: 400;
            }
        }

        button {
            align-items: center ;
            background: ${mainCss.mainBlack};
            border:none;           
            border-left: 1px solid rgba(224,148,42, 0.3);
            color: ${mainCss.mainOrange};
            cursor: pointer;  
            display: flex;
            font-size: 1.4em;
            justify-content: center;
            padding: 10px;
            padding-right: 15px;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.5s;            

            svg {
                height: 18px;
                margin: 0 5px;
                width: 18px;
            }

            &:hover {
                background: ${mainCss.mainOrangeHover};
            }
        }
    }    

    h3 {
        font-family: ${mainCss.tittleFont};
        font-size: 2em;
        font-weight: 600;
    }

    img {
        border-radius: 50%;
        height: 35px;
        margin-right: 25px;
        width: 35px;
    }
    
    @media screen and (max-width: 900px) { 
        .container__picture {
            width: 20%;
        }   

        .container__tittle {
            display: none;
            opacity: 0;
        }  

        .container__search {
            width: 80%;

        input {            
            background: ${mainCss.mainOrange};
            color: ${mainCss.mainBlack};

            &::placeholder {
                color: ${mainCss.orangeInputTextColor};
            }
        }

        button {
            background: ${mainCss.mainOrange};
            border-left: 1px solid rgba(23,23,23,0.1);        
            color: ${mainCss.mainBlack};

            svg {
                height: 14px;
                margin: 0 5px;
                width: 14px;
            }

            &:hover {
                background: ${mainCss.mainOrangeHover};
            }
        }
    }  
}
`;