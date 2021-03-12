import React from 'react';
import { setSelectedStatus } from '../../redux/actors-actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input} from 'reactstrap';

const SelectStatus = (props) => {

    const selectedStatus = useSelector(state => state.selectedFilters.selectedStatus);
    const dispatch = useDispatch();

    const changeSelectedStatus = (event) => {
        dispatch(setSelectedStatus(event.target.value));
    }
  
      return (<FormGroup>
      <Label for="select-category">Select status:</Label>
      <Input
      onChange={changeSelectedStatus} 
      value={selectedStatus}
       type="select"
        name="select"
         id="select-category">
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Input>
    </FormGroup>);
}

export default SelectStatus;