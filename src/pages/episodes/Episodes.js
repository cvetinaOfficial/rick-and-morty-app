import EpisodeCard from "../../components/episode-card/episode-card";
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import Filters from "../../components/episodes-filters/Filters";


function Episodes(props){
    const episodes = useSelector(state => state.episodes);

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
    <div className="container">
        <Filters/>
        <div className="row mt-3 justify-content-end">
                <div className="col-md-3 text-right pt-4">
                    <button className="btn btn-dark" id="switch-layout" onClick={handleSwitchLayouts}>Switch to row layout</button>
                </div>
            </div>
        <div className="row mt-3" id="list">
            {showEpisodesCards()}
        </div>
    </div>
    </>
}

export default Episodes;