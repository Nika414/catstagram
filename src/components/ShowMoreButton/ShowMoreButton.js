import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../store/cardsSlice';

export default function ShowMoreButton() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.cards.query);
  const isLoaded = useSelector((state) => state.cards.loader.nextPageLoader);

  function handleMoreCards() {
    dispatch(getCards({ query, loadNextPage: true }));
  }

  return (
    <div className="show-more-button__container">
      <button onClick={handleMoreCards} type="button" className="show-more-button">
        {isLoaded === false ? 'Loading...' : 'Show more'}
      </button>
    </div>
  );
}
