import CardLike from '../CardLike';
import CardDeleteBttn from '../CardDeleteBttn';

export default function Card({
  author, alt, url, description, id, liked, link,
}) {
  return (
    <div className="card">
      <CardDeleteBttn id={id} />
      <img src={url} className="card__img" alt={alt || 'without description'} />
      <div className="card__container">
        <a href={link} className="card__link" title="Open on unsplash">
          <h3 className="card__description">
            {description || (String.fromCodePoint('0x1F63B'))}
          </h3>
        </a>
        <CardLike id={id} isLiked={liked} />
      </div>
      <span className="card__subtitle">
        {`By ${author}`}
      </span>
    </div>
  );
}
