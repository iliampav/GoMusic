import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Container = styled.div`
    align-items: center;
    background-color: ${mainCss.mainBlack};
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
`

export const BandProfile = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    flex-direction: column;
    max-width: 1300px;
    padding: 0 22px 0 6px ; 
    position: relative;
    width: 80vw;

    ul {
        align-items: center;
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        padding: 10px;
        width: 100%;

        li {            
            cursor: pointer;

            a {
                align-items: center;
                color: ${mainCss.mainOrange};
                display: flex;
                justify-content: center;
                text-decoration: none;
            }

            svg {
                height: 30px;
                width: 30px;
            }

            p {
                margin-left: 5px;
            }
        }
    }

    #bandProfile__tittle {
        align-self: stretch;
        flex: 1;
        margin-top: 80px;
        max-height: 500px;
        min-height: 300px;
        position: relative;
        
        img {
            bottom:0;
            flex: 1;
            height: 100%;
            left:0;
            object-fit: cover;
            position: absolute;
            right:0;
            width: 100%;
            top:0;
            z-index: 1;
        }

        h1 {
            color: white;
            font-size: 40px;
            margin-top: -13px;
            position: absolute;
            text-align: center;
            top: 50%;
            width: 100%;
            z-index: 2;
        }
    }

    @media screen and (max-width: 900px) { 

        padding: 0px;
        width: 100vw;

            #bandProfile__image {
            max-height: 400px;
        }
    }
`

export const VideoArea = styled.ul`
    align-items: center;
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 30px;
    max-width: 1300px;
    position: relative;
    width: 100%;

    @media screen and (max-width: 1300px) {
        max-width: 1100px;
    }

    @media screen and (max-width: 900px) {
        max-width: 800px;
    }

    @media screen and (max-width: 700px) {
        max-width: 600px;
    }
`;