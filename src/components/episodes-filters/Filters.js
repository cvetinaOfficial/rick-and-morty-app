import React from 'react';
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { getEpisodes } from '../../redux/episodes-actions';
import SelectEpisode from './SelectEpisode';

const Filters = (props) => {

    const selectedEpisode = useSelector(state => state.selectedFilters.selectedEpisode);
    const dispatch = useDispatch();

    const loadEpisodes = () => {
        dispatch(getEpisodes({
            episode: selectedEpisode
          }));
    }
  
    // useEffect is like ngOnInit, ngOnChange and ngOnDestroy
      useEffect(() => {
        loadEpisodes();
    },[]);

    return (
        <>
    <div className="row">
        <div className="col-md-4">
            <SelectEpisode />
        </div>
    </div>
    <div className="row">
        <div className="col">
            <Button color="secondary" onClick={loadEpisodes}>Load Episodes</Button>
        </div>
    </div>
    </>
    )
}

export default Filters;