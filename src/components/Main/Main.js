import { useSelector } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';

export default function Main() {
  const filterStatus = useSelector((state) => state.filter.filter.status);
  const cards = useSelector((state) => (filterStatus
    ? state.cards.cards.filter((item) => item.liked_by_user === true)
    : state.cards.cards));
  const isLoaded = useSelector((state) => state.cards.loader.cardsLoader);

  return (
    <main className="main">
      <SearchForm />
      <FilterCheckbox cards={cards} />
      {!isLoaded ? (<Preloader />)
        : cards.length !== 0 ? (
          <>
            <CardsList cards={cards} />
            <ShowMoreButton />
          </>
        ) : (<span className="main__span">Oops! There is nothing here..yet</span>)}
    </main>
  );
}
