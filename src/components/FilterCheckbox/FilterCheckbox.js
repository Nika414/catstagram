import { useState, useEffect } from 'react';

export default function FilterCheckbox({ onClick }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      console.log('включен');
      onClick();
    } else {
      console.log('выключен');
    }
  }, [checked]);

  function handleCheckBoxClick() {
    setChecked((prev) => !prev);
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
