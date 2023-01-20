import { useDispatch } from 'react-redux';
import { cardsDelete } from '../store/cardsSlice';

export default function CardDeleteBttn({ id }) {
  const dispatch = useDispatch();

  function handleDeleteCard() {
    dispatch(cardsDelete(id));
  }
  return (
    <button onClick={handleDeleteCard} aria-label="Delete" className="card__delete-bttn" type="button" />
  );
}
