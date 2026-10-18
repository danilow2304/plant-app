import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  if (plants.length === 0) {
    return <p className="empty">No plants match your search.</p>;
  }

  return (
    <main className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </main>
  );
}

export default PlantList;