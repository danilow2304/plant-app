function PlantCard({ plant }) {
  return (
    <article className="plant-card">
      <h2>{plant.commonName}</h2>
      <p className="scientific">{plant.scientificName}</p>
      <p>Sunlight: {plant.sunlight}</p>
      <p>Soil: {plant.soil}</p>
      <p>Blooms: {plant.bloomSeason}</p>
    </article>
  );
}

export default PlantCard;