import styled from 'styled-components';
import * as mainCss from '../../styles/variable_css';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    background-color: ${mainCss.mainBlack};
`

export const BandProfile = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 80vw;
    max-width: 1300px;
    height: 100%;
    padding: 0 22px 0 6px ; 

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        width: 100%;
        padding: 10px;

        li {            
            cursor: pointer;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                color: ${mainCss.mainOrange};
            }

            svg {
                width: 30px;
                height: 30px;
            }

            p {
                margin-left: 5px;
            }
        }
    }

    #bandProfile__tittle {
        align-self: stretch;
        flex: 1;
        max-height: 500px;
        min-height: 300px;
        position: relative;
        
        img {
            flex: 1;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: 1;
            position: absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
        }

        h1 {
            z-index: 2;
            position: absolute;
            top: 50%;
            font-size: 40px;
            width: 100%;
            margin-top: -13px;
            text-align: center;
            color: white;
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