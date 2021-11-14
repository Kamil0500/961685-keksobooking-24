import {setActivateFormState} from './set-forms-state.js';
import {addMarkersGroup} from './map.js';
import {setFilterFormChange, setResRanking} from './filter.js';

const filtersForm = document.querySelector('.map__filters');

export const getSuccessHandler = (res) => {
  const rankingRes = setResRanking(res);
  addMarkersGroup(rankingRes);
  setActivateFormState(filtersForm);
  setFilterFormChange(() => addMarkersGroup(rankingRes));
};
