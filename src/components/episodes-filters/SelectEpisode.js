import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input} from 'reactstrap';
import { setSelectedEpisode } from '../../redux/episodes-actions';

const SelectEpisode = (props) => {

  const selectedEpisode = useSelector(state => state.selectedFilters.selectedEpisode);
  const dispatch = useDispatch();

  const changeSelectedEpisode = (event) => {
      dispatch(setSelectedEpisode(event.target.value));
  } 

    return (<FormGroup>
    <Label for="select-category">Select episode</Label>
    <Input
    onChange={changeSelectedEpisode} 
    value={selectedEpisode}
     type="select"
      name="select"
       id="select-episode">
      <option value="S01E01">S01E01</option>
      <option value="S01E02">S01E02</option>
      <option value="S01E03">S01E03</option>
      <option value="S01E04">S01E04</option>
      <option value="S01E05">S01E05</option>
      <option value="S01E06">S01E06</option>
      <option value="S01E07">S01E07</option>
      <option value="S01E08">S01E08</option>
      <option value="S01E09">S01E09</option>
      <option value="S01E010">S01E010</option>
      <option value="S01E011">S01E011</option>
      <option value="S02E01">S02E01</option>
      <option value="S02E02">S02E02</option>
      <option value="S02E03">S02E03</option>
      <option value="S02E04">S02E04</option>
    </Input>
  </FormGroup>);
}

export default SelectEpisode;