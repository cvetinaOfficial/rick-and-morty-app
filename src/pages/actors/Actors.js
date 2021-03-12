import ActorCard from "../../components/actor-card/actor-card";
import ReactDOM from 'react-dom';
import Filters from '../../components/actors-filters/Filters';
import { useSelector, useDispatch } from 'react-redux';


function Actors(props){

    const actors = useSelector(state => state.actors);

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

    function showActorCards(){
        return actors.map((actor, index) => {
            return <ActorCard key={index} 
            name={actor.name} 
            status={actor.status} 
            image={actor.image} 
            gender={actor.gender}
            location={actor.origin.location}
            species={actor.species}
            origin={actor.origin.name}
            created={actor.created}
            ></ActorCard>
        });
    }
    

    return <>
    <div className="container">
        <Filters />
        <div className="row mt-3 justify-content-end">
            <div className="col-md-3 text-right pt-4">
                <button className="btn btn-dark" id="switch-layout" onClick={handleSwitchLayouts}>Switch to row layout</button>
            </div>
        </div>
        <div className="row mt-3" id="list">
                {showActorCards()}
        </div>
    </div>
    </>
}

export default Actors;