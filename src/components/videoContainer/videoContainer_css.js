import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Container = styled.div`
    align-items: center;
    display: flex; 
    flex-basis: 900%;
    flex-direction: column;
    justify-content: center; 
    margin-top: 8vh;

    .container__area-size {
        align-items: center;
        background-color: white;
        width: 80%;
        display: flex;
        filter: drop-shadow(0 5px 0.3rem rgba(0, 0, 0, 0.1));
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`
    align-self: stretch;
    flex: 1;

    img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        flex: 1;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;

export const ItemDescription = styled.div`
    font-size: 20px;
    margin-top: 20px;
`;

export const CreatedBy = styled.div`
    font-size: 20px;
    margin-top: 20px;
`;

export const Title = styled.div`
    font-size: 20px;
    margin-top: 20px;
`;