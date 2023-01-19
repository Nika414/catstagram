import CardLike from '../CardLike';
import CardDeleteBttn from '../CardDeleteBttn';

export default function Card({
  author, alt, url, description, id, liked, link,
}) {
  return (
    <div className="card">
      <CardDeleteBttn id={id} />
      <div style={{ backgroundImage: `url(${url})` }} className="card__img" src={url} alt={alt} />
      <div className="card__container">
        <a href={link} className="card__description" title="Open on unsplash">
          <h3 className="card__description">
            {description || (
              <div>
                {String.fromCodePoint('0x1F63B')}
              </div>
            )}
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
