import React from 'react';
import { useEffect } from "react";
import { getActors } from '../../redux/actors-actions';
import { useDispatch,useSelector } from 'react-redux';
import SelectCategory from './SelectCategory';
import SelectStatus from './SelectStatus';
import { Button } from 'reactstrap';

const Filters = (props) => {

    const selectedGender = useSelector(state => state.selectedFilters.selectedGender);
    const selectedStatus = useSelector(state => state.selectedFilters.selectedStatus);
    const dispatch = useDispatch();

    const loadActors = () => {
        dispatch(getActors({
            gender: selectedGender,
            status: selectedStatus,
          }));
    }
  
    // useEffect is like ngOnInit, ngOnChange and ngOnDestroy
      useEffect(() => {
        loadActors();
    },[]);

    return (
        <>
    <div className="row">
        <div className="col-md-4">
            <SelectCategory />
        </div>
        <div className="col-md-4">
            <SelectStatus />
        </div>
    </div>
    <div className="row">
        <div className="col">
            <Button color="secondary" onClick={loadActors}>Load Actors</Button>
        </div>
    </div>
    </>
    )
}

export default Filters;