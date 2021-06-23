import { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Header from '../Header/Header';
import VideoContainer from '../videoContainer/VideoContainer';

import { Container, BandProfile, VideoArea } from './SearchResult_css';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

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
            fetch(`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&maxResults=10&type=video&key=${youtubeKey}`),
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
    let dataToUse = {}
     
    if (withData && artist.page.totalElements !== 0) {
        dataToUse = {
            tittle: newSearch.toUpperCase(),
            image: artist._embedded.attractions[0].images[0].url,
            website: artist._embedded.attractions[0].externalLinks.homepage[0].url,
            facebook: artist._embedded.attractions[0].externalLinks.facebook[0].url,
            instagram: artist._embedded.attractions[0].externalLinks.instagram[0].url,
            youtube: artist._embedded.attractions[0].externalLinks.youtube[0].url,
        }
    }

    return (
        <>
            <Container>
                <Header tittle={dataToUse.tittle} inputSearch={headerSearch} />

                {/* Checa se a pesquisa retornou algum dado */}
                {withData && artist.page.totalElements !== 0 ? 

                    <>
                        <BandProfile>
                            <div id="bandProfile__tittle">
                                <h1>{dataToUse.tittle}</h1>
                                <img src={dataToUse.image}></img>
                            </div>
                            <ul>
                                <li>
                                    <a href={dataToUse.youtube} target="_blank">
                                        <AiFillYoutube />
                                        <p>Youtube</p>
                                    </a>
                                </li>
                                <li>
                                    <a href={dataToUse.facebook} target="_blank">
                                        <AiFillFacebook />
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a href={dataToUse.instagram} target="_blank">
                                        <AiFillInstagram />
                                        <p>Instagram</p>
                                    </a>
                                </li>
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