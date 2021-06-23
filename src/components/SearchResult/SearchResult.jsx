import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Header from '../Header/Header';
import VideoContainer from '../videoContainer/VideoContainer';

import { Container, BandProfile, VideoArea } from './SearchResult_css';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaItunes } from 'react-icons/fa';

export default function SearchResult() {

    const history = useHistory()

    // guarda o retorno da lista de videos do Youtube
    const [list, setList] = useState([])       
    // guarda o retorno das insofmrções do artista 
    const [artist, setArtist] = useState([])
    // recebe a nova pesquisa do header Input
    const [newSearch, setNewSeach] = useState(history.location.state.inputValue)

    //corrigi o input para ser feito a pesquisa no HTTP request
    const search = newSearch.split(' ').join('+')

    //Keys recebidas pelo arquivo .env
    const youtubeKey = process.env.REACT_APP_YOUTUBE_API_KEY
    const ticketMasterKey = process.env.REACT_APP_TICKET_MASTER_API_KEY

    useEffect(() => {
        Promise.all ([
            fetch(`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&maxResults=12&type=video&key=${youtubeKey}`),
            fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${search}&apikey=${ticketMasterKey}`)
        ])
        .then(([youtubeList , ticketMasterList]) => {
            youtubeList.json().then(data => setList(data))
            ticketMasterList.json().then(data => setArtist(data))
        })
    }, [newSearch])

    console.log(list)
    console.log(artist)
    
    const headerSearch = (headerData) => {
        console.log('aqui')
        setNewSeach(headerData)
    }

    // checa se existe data no array
    const withData = artist.length == 0 ? false : true 

    //checa se existe links externos
    const externalLink = artist.length == 0 ? false : artist._embedded.attractions[0].externalLinks

    console.log(artist)

    return (
        <>
            <Container>

                {/* Checa se a pesquisa retornou algum dado */}
                {withData && artist.page.totalElements !== 0 ?
                <Header tittle={newSearch.toUpperCase()} inputSearch={headerSearch} />
                :
                ''
                }

                {/* Checa se a pesquisa retornou algum dado */}
                {withData && artist.page.totalElements !== 0 ? 

                    <>
                        <BandProfile>
                            <div id="bandProfile__tittle">
                                <h1>{newSearch.toUpperCase()}</h1>
                                <img src={artist._embedded.attractions[0].images[0].url}></img>
                            </div>
                            <ul>
                                
                                {/* Cada check desses, verifica se existe a rede social, essa é a do youtube */}
                                {externalLink && externalLink.youtube
                                    ?
                                        <li>
                                            <a href={externalLink.youtube[0].url} target="_blank">
                                                <AiFillYoutube />
                                                <p>Youtube</p>
                                            </a>
                                        </li>
                                    :
                                        ''
                                    }
                                {externalLink && externalLink.facebook
                                    ?
                                <li>
                                    <a href={externalLink.facebook[0].url} target="_blank">
                                        <AiFillFacebook />
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                :
                                    ''
                                }
                                {externalLink && externalLink.instagram
                                    ? 
                                    <li>
                                        <a href={externalLink.instagram[0].url} target="_blank">
                                            <AiFillInstagram />
                                            <p>Instagram</p>
                                        </a>
                                    </li>
                                    :
                                    ''                                
                                }  
                                {externalLink && externalLink.itunes
                                    ? 
                                    <li>
                                        <a href={externalLink.itunes[0].url} target="_blank">
                                            <FaItunes />
                                            <p>Itunes</p>
                                        </a>
                                    </li>
                                    :
                                    ''                                
                                }                              
                            </ul>
                        </BandProfile>
                        <VideoArea>
                            {
                                list.items ?
                                list.items.map(video => {                         
                                    return <VideoContainer key={video.id.videoId} productList={video} />
                                }) 
                                :
                                <p>No data</p>
                            }
                        </VideoArea>
                    </>
                :    

                    <div>No data</div>

                }
            </Container>
        </>
    )
}