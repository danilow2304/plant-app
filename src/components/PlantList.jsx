import PlantCard from "./PlantCard";

export default function PlantList({ plants }) {
  return (
    <section className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </section>
  );
}