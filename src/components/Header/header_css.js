import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Area = styled.div`
    height: 80px;
    width: 100vw;
    display: flex; 
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${mainCss.mainBlack};
    background-color: ${mainCss.mainOrange};

    @media screen and (max-width: 900px) { 
        background-color: ${mainCss.mainBlack};
        border-bottom: 2px solid ${mainCss.mainOrange};
    }
`;

export const Container = styled.div`
    align-items: center;
    max-width: 1300px;
    width: 100%;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;  
    
    div {
        width: 100%;
        display: flex;
    }

    .container__tittle {
        justify-content: center;
    }

    .container__picture {
        justify-content: flex-end;

    }    

    .container__search {
        justify-content: flex-start;
        margin-left: 10px;
        margin:  9px 22px 9px 6px;
        font-weight: 500;

        input {            
            background: ${mainCss.mainBlack};
            border: none;
            font-size: 1em;  
            color: ${mainCss.mainOrange};
            width: 100%;
            padding: 10px;
            font-weight: 600;

            &:focus {
                border: none;
                outline: 0;               
            
            }

            &::placeholder {
                font-size: 1rem;
                color: ${mainCss.mainOrangeHover};
                font-weight: 400;
            }
        }

        button {
            background: ${mainCss.mainBlack};
            color: ${mainCss.mainOrange};
            border:none;           
            padding: 10px;
            padding-right: 15px;
            font-size: 1.4em;
            border-left: 1px solid rgba(224,148,42, 0.3);
            cursor: pointer;  
            display: flex;
            align-items: center ;
            justify-content: center;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.5s;            

            svg {
                height: 18px;
                width: 18px;
                margin: 0 5px;
            }

            &:hover {
                background: ${mainCss.mainOrangeHover};
            }
        }
    }    

    h3 {
        font-size: 2em;
        font-family: ${mainCss.tittleFont};
        font-weight: 600;
    }

    img {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 25px;
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
            color: ${mainCss.mainBlack};
            background: ${mainCss.mainOrange};

            &::placeholder {
                color: ${mainCss.orangeInputTextColor};
            }
        }

        button {
            background: ${mainCss.mainOrange};
            color: ${mainCss.mainBlack};
            border-left: 1px solid rgba(23,23,23,0.1);        

            svg {
                height: 14px;
                width: 14px;
                margin: 0 5px;
            }

            &:hover {
                background: ${mainCss.mainOrangeHover};
            }
        }
    }  
}
`;