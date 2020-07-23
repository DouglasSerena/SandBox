import React, { Component } from 'react';

import "./style.css"

class Caroseul extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: []
        }
    }

    // componentDidMount() {
    //     fetch('/users')
    //         .then(res => res.json())
    //         .then(datas => console.log(datas))
    // }

    render() {
        return (
            <div className="carousel">
                {this.state.comics.map((datas, index) => {
                    return(
                        <img key={index} src={datas.paths[0].path} alt={datas.name} />
                    );
                })}
            </div> 
        );
    }
}

export default Caroseul;