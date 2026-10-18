import PlantCard from "./PlantCard";

function PlantList({ plants, onReset }) {
  // Conditional rendering: show a message instead of an empty grid.
  if (plants.length === 0) {
    return (
      <main className="plant-list empty">
        <p>No plants match your search.</p>
        <button type="button" onClick={onReset}>
          Clear filters and show all plants
        </button>
      </main>
    );
  }

  return (
    <main className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          commonName={plant.commonName}
          scientificName={plant.scientificName}
          sunlight={plant.sunlight}
          soil={plant.soil}
          bloomSeason={plant.bloomSeason}
        />
      ))}
    </main>
  );
}

export default PlantList;