import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function Main() {
  const [isFilterOn, setIsFilterOn] = useState(false);

  const cards = useSelector((state) => (isFilterOn
    ? state.cards.cards.filter((card) => card.liked_by_user === true)
    : state.cards.cards));

  function handleFilter() {
    setIsFilterOn(!isFilterOn);
  }

  return (
    <main className="main">
      <SearchForm />
      <FilterCheckbox cards={cards} onClick={handleFilter} />
      <CardsList cards={cards} />
      <ShowMoreButton />
    </main>
  );
}
