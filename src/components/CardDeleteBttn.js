export default function CardDeleteBttn({ id, onClick }) {
  function handleDeleteCard() {
    onClick(id);
  }
  return (
    <button onClick={handleDeleteCard} aria-label="Delete" className="card__delete-bttn" type="button" />
  );
}
