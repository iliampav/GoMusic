import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Container = styled.div`

    .container__content {
        align-items: center;
        background:  ${mainCss.mainOrange};
        border-radius: 20px;
        box-sizing: border-box ;
        display: flex;
        flex-direction: column;
        left: 50%;
        justify-content: flex-end;
        height: auto;
        padding: 20px;
        position: absolute;
        text-align: center;
        top: 25%;
        transform: translate( -50%, -50%) scale(0);
        z-index: 41;
    }

    .container__close-btn {
        align-items: center;
        background: #222;
        cursor: pointer;
        display: flex;
        justify-content: center;
        height: 30px;
        width: 100%;
        text-align: center;

        p {
            color: #fff;
            cursor: pointer;            
            font-size: 14px;
            font-weight: 600;
        }

        iframe {
            width: 100%;
            height: 100%;
        }
    }

    .container__popup.active .container__content {
        transition: all 300ms ease-in-out ;
        transform: translate(-50%, -50%) scale(1);
    }
`