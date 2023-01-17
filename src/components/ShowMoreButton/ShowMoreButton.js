import { useDispatch } from 'react-redux';
import { getCards } from '../store/cardsSlice';

export default function ShowMoreButton() {
  const dispatch = useDispatch();
  function handleMoreCards() {
    dispatch(getCards());
  }

  return (
    <div className="show-more-button__container">
      <button onClick={handleMoreCards} type="button" className="show-more-button">
        Ещё
      </button>
    </div>
  );
}
