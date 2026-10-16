import PlantCard from "./PlantCard";

export default function PlantList({ plants, onToggleFavorite, onRemove }) {
  if (plants.length === 0) {
    return <p className="empty">No plants match your search or filters.</p>;
  }

  return (
    <section className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleFavorite={onToggleFavorite}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
}