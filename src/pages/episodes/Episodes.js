import EpisodeCard from "../../components/episode-card/episode-card";
import { useEffect, useState, useRef } from "react";
import getEpisodes from "../../services/episodes.service";
import ReactDOM from 'react-dom';


function Episodes(props){
    let [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        getEpisodes().then(result => {
                setEpisodes(result.results);
            });
      }, [])

    function handleSwitchLayouts(){
        let cardElement = document.querySelector('.card');
        let computedCss = window.getComputedStyle(ReactDOM.findDOMNode(cardElement));
        let currentLayout = computedCss.flexDirection;
        let cardElements = document.getElementsByClassName('card');
        if (currentLayout === "column") {
            for (let item of cardElements) {
                item.style.flexDirection = 'row';
            }
            document.getElementById('switch-layout').text = 'Switch to column layout';
        } else {
            for (let item of cardElements) {
                item.style.flexDirection = 'column';
            }
            document.getElementById('switch-layout').text = 'Switch to row layout';
        } 
    }

    function showEpisodesCards(){
        return episodes.map((episode, index) => {
             return <EpisodeCard key={index}
            name={episode.name}
            episode={episode.episode}
            airDate={episode.air_date}
            created={episode.characters.created}
            ></EpisodeCard>
        });
    }

    return <>
    <div className="row mt-3 justify-content-end">
        <div className="col-md-3 text-right">
            <button className="btn btn-dark" id="switch-layout" onClick={handleSwitchLayouts}>Switch to row layout</button>
        </div>
    </div>
        <div className="row mt-3" id="list">
            {showEpisodesCards()}
        </div>
    </>
}

export default Episodes;