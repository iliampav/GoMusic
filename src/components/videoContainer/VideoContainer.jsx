import { Container, ImageContainer, ItemDescription, Title, CreatedBy } from "./videoContainer_css";

export default function VideoContainer({productList}) {    
    console.log(productList.id.videoId)

    return (
        <>
            <Container>
                <div className="container__area-size">
                    <ImageContainer>
                        <img src={productList.snippet.thumbnails.high.url} />
                    </ImageContainer>
                    <Title>{productList.snippet.title}</Title>
                    <CreatedBy>
                        <p>Created by:</p>
                        <p>{productList.snippet.channelTitle}</p>
                        <p>{productList.snippet.publishedAt}</p>
                    </CreatedBy>
                    <ItemDescription>{productList.snippet.description}</ItemDescription>
                </div>
            </Container>
        </>
    )
}