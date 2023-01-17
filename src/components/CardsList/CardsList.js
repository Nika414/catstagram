import Card from '../Card/Card';

export default function CardsList({ cards }) {
  return (
    <section className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          alt={card.alt_description}
          url={card.urls.regular}
          author={card.user.username}
          description={card.description}
          liked={card.liked_by_user}
          link={card.links.html}
        />
      ))}
    </section>
  );
}
