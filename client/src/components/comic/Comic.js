import React, { Component } from 'react'; 

import "./style.css"

class Comic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comics: []
        }
    }

    // async componentDidMount() {
    //     const response = await fetch('/user/10', {method: "delete"})
    //     const body = await response.json();
    //     // if (response.status !== 200) throw Error(body.message);
    //     console.log(body)
    // }

    render() {
        return (
            <div className="comic-category">
                <h2 className="comic-title">HQS Categorias</h2>
                <button className="comic-category-button">Ação</button>
                <button className="comic-category-button">Aventura</button>
                <button className="comic-category-button">Místerio</button>
                <button className="comic-category-button">romance</button>
                <div className="comic-img">
                    {this.state.comics.map((datas, index) => 
                        <div key={index} className="comic-img-group">
                            <img key={index+datas.name} className="comic-img-item" src={"./" + datas.paths[0].path} alt={datas.name} />
                            <p className="comic-img-legend">{datas.name}</p>
                        </div>
                    )}
                </div>
            </div> 
        );
    }
}

export default Comic;