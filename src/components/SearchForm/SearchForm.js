import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getCards, cardsSetQuery } from '../../store/cardsSlice';

export default function SearchForm() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    // Данные поисковой строки необходимы для корректной загрузки следующих страниц
    dispatch(cardsSetQuery(query));
    dispatch(getCards({ query }));
  }

  return (
    <form className="search-form" method="post">
      <input value={query} onChange={handleQueryChange} type="text" className="search-form__input" placeholder="Specify the cat e.g persian cat, grey cat etc" />
      <button onClick={handleSearch} type="submit" className="search-form__button">Find</button>
    </form>
  );
}
