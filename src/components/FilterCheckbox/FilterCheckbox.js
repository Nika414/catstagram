import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterStatusChanged } from '../store/filterSlice';

export default function FilterCheckbox() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  function handleCheckBoxClick() {
    setChecked((prev) => !prev);
    dispatch(filterStatusChanged());
  }

  return (
    <form className="filter-checkbox" method="post">
      <label htmlFor="filter-checkbox_input" className="filter-checkbox__label">
        <input onClick={handleCheckBoxClick} type="checkbox" className={`filter-checkbox__input ${checked && 'filter-checkbox__input_checked'} `} id="filter-checkbox_input" />
        <span className="filter-checkbox__customized-checkbox" />
        Show only liked pictures
      </label>
    </form>
  );
}
