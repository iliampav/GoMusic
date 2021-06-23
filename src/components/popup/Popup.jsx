import { Container } from './popup_css'

export default function SearchPage({idName}) {

    const closeVideo = () => {
        document.getElementById(`${idName}`).classList.toggle('active')
        document.getElementById(`iframe-${idName}`).src=''
    }

    return (
        <Container>
            <div className="container__popup" id={idName}>
                <div className="container__content">
                    <div>
                        <iframe  
                                id={`iframe-${idName}`}                             
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                >
                        </iframe>
                    </div>
                    <div className="container__close-btn" onClick={closeVideo}><p>Close video</p></div>                        
                </div>
            </div>
        </Container>
    )
}