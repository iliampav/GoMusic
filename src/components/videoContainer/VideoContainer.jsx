import Popup from '../popup/Popup';

import { Container, ImageContainer, ItemDescription, Title, CreatedBy } from "./videoContainer_css";

export default function VideoContainer({productList}) {  

    const newDate = productList.snippet.publishedAt.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)

    const playVideo = () => {

        console.log(productList.id.videoId)
        console.log(document.getElementById(`iframe-${productList.id.videoId}`))
        document.getElementById(`${productList.id.videoId}`).classList.toggle('active')
        document.getElementById(`iframe-${productList.id.videoId}`).src=`https://www.youtube.com/embed/${productList.id.videoId}`

    }

    return (
        <>
            <Container>                      
                <div className="container__area-size">
                    <ImageContainer> 
                        <a onClick={playVideo}/>
                        <img src={productList.snippet.thumbnails.high.url} />                        
                    </ImageContainer>
                    <Title><p>{productList.snippet.title}</p></Title>
                    <CreatedBy>
                        <p>Created by:</p>
                        <p>{productList.snippet.channelTitle}</p>
                        <p>at</p>
                        <p>{newDate}</p>
                    </CreatedBy>
                    <ItemDescription>{productList.snippet.description}</ItemDescription>
                    <Popup idName={productList.id.videoId} />
                </div>          
            </Container>
        </>
    )
}