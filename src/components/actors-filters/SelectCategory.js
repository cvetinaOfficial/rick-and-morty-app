import React from 'react';
import { setSelectedGender } from '../../redux/actors-actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input} from 'reactstrap';

const SelectCategory = (props) => {

  const selectedGender = useSelector(state => state.selectedFilters.selectedGender);
  const dispatch = useDispatch();

  const changeSelectedGender = (event) => {
      dispatch(setSelectedGender(event.target.value));
  } 

    return (<FormGroup>
    <Label for="select-category">Select category</Label>
    <Input
    onChange={changeSelectedGender} 
    value={selectedGender}
     type="select"
      name="select"
       id="select-category">
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="unknown">Unknown</option>
    </Input>
  </FormGroup>);
}

export default SelectCategory;