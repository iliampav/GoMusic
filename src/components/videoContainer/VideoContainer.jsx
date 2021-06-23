import { Container, ImageContainer, ItemDescription, Title, CreatedBy } from "./videoContainer_css";

export default function VideoContainer({productList}) {  

    const newDate = productList.snippet.publishedAt.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)

    const params = `
    scrollbars=no,
    resizable=no,
    status=no,
    location=no,
    toolbar=no,
    menubar=no,
    width=80vw,
    height=50vh,
    left=100,
    top=100
    `

    const playVideo = () => {
        window.open(`https://www.youtube.com/watch?v=${productList.id.videoId}`, 'video player', params)
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
                </div>                
            </Container>
        </>
    )
}