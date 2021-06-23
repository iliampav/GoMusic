import { Container, Area } from './header_css';

import { BiSearch } from 'react-icons/bi'

export default function Header(props) {

    const searchPage = () => {
        const newSeach = document.getElementById('inputNewSearch').value
        window.scrollTo({top: 0, behavior: 'smooth'})
        props.inputSearch(newSeach)
    }

    return (
        <Area>
            <Container>
                <div className="container__search">
                    <input id="inputNewSearch" type="text" placeholder='New search...'/>
                    <button onClick={searchPage} >
                        <BiSearch />
                        Search
                    </button>
                </div>
                <div className="container__tittle">
                    <h3> {props.tittle} </h3>
                </div>
                <div className="container__picture">
                    <img src="https://avatars.githubusercontent.com/u/65317849?s=60&v=4"></img>
                </div>
            </Container>
        </Area>
    )
}