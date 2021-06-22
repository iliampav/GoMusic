import { useHistory } from "react-router";

import { Container, Search } from './searchPage_css';

export default function SearchPage() {
    const history = useHistory();

    const changePage = () => {
        const text = document.getElementsByTagName('input')[0].value
        history.push({
            pathname: '/search',
            state: {
                inputValue: text
            }
        })
    }

    return (
        <Container>
            <div id="container__background-img" />
            <h1>GoMusic</h1>
            <Search>
                <div>
                    <input type="text"/>
                    <button onClick={changePage} >search</button>
                </div>
                <p>search for your artist or band</p>
            </Search>
        </Container>
    );
};

