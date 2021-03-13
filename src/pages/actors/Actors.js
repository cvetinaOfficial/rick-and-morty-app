import ActorGridCard from "../../components/actor-card/actor-grid-card";
import ReactDOM from 'react-dom';
import Filters from '../../components/actors-filters/Filters';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { Button } from "reactstrap";
import { setListView } from '../../redux/actors-actions';
import ActorListCard from "../../components/actor-card/actor-list-card";


function Actors(props){

    const actors = useSelector(state => state.actors);
    const isListView = useSelector(state => state.listView);
    const dispatch = useDispatch();

    const getActors = () => {
    if(isListView){
        const actorsList = actors.map((actor, index) => {
            return <ActorListCard key={index} 
                name={actor.name} 
                status={actor.status} 
                image={actor.image} 
                gender={actor.gender}
                location={actor.origin.location}
                species={actor.species}
                origin={actor.origin.name}
                created={actor.created}
                ></ActorListCard>
            })
            return actorsList;
        }

        const actorsGridView = actors.map((actor, index) => {
            return <ActorGridCard key={index} 
            name={actor.name} 
            status={actor.status} 
            image={actor.image} 
            gender={actor.gender}
            location={actor.origin.location}
            species={actor.species}
            origin={actor.origin.name}
            created={actor.created}
            ></ActorGridCard>
        })
        return actorsGridView;
    }

    const toggleListView = () => {
        dispatch(setListView(!isListView));
    }

    const getListIcon = () => {
        if(isListView){
            return faList;
        }
        return faTh;
    }

    return <>
    <div className="container">
        <Filters />
        <div className="row mt-3 justify-content-end">
            <div className="col-md-3 text-right pt-4">
                <Button color="secondary" onClick={toggleListView}>
                    <FontAwesomeIcon icon={getListIcon()}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
        <div className="row mt-3" id="list">
                {getActors()}
        </div>
    </div>
    </>
}

export default Actors;