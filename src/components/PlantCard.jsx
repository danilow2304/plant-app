export default function PlantCard({ plant, onToggleFavorite, onRemove }) {
  const { id, name, category, light, water, description, favorite } = plant;

  return (
    <article className={`card ${favorite ? "favorite" : ""}`}>
      <h3>
        {name} {favorite && <span title="Favorite">♥</span>}
      </h3>
      <span className="tag">{category}</span>
      <p>{description}</p>
      <p><strong>Light:</strong> {light}</p>
      <p><strong>Water:</strong> {water}</p>
      <div className="card-buttons">
        <button onClick={() => onToggleFavorite(id)}>
          {favorite ? "Unfavorite" : "Favorite"}
        </button>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </article>
  );
}