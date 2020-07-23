import React, { Fragment } from 'react';

import Caroseul from '../components/carousel/Carousel';
import Comic from '../components/comic/Comic';

const datas = [
    { src: "avatar.jpeg", title: "avatar" },
    { src: "nin.jpeg", title: "ninja" },
    { src: "acade.jpeg", title: "acade" },
    { src: "ceifa.jpeg", title: "ceifa" },
    { src: "avatar.jpeg", title: "avatar" }
]

function App() {
    return (
        <Fragment>
            <Caroseul datas={datas} />
            <Comic datas={datas} />
        </Fragment>
    );
}

export default App;
