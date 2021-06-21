import { Container } from './seachPage';

import stagePicture from '../../images/stagepicture.jpg';

export default function SeachPage() {
    return (
        <Container>
            <div id="container__background-img" />
            <h1>GoMusic</h1>
            <form>
                <div>
                    <input type="text"/>
                    <button>Seach</button>
                </div>
                <p>Seach for your artist or band</p>
            </form>
        </Container>
    );
};

