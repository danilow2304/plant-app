function PlantCard({ plant }) {
  return (
    <article className="plant-card">
      <h2>{plant.commonName}</h2>
      <p className="scientific">{plant.scientificName}</p>
      <dl>
        <dt>Sunlight</dt>
        <dd>{plant.sunlight}</dd>
        <dt>Soil</dt>
        <dd>{plant.soil}</dd>
        <dt>Blooms</dt>
        <dd>{plant.bloomSeason}</dd>
      </dl>
    </article>
  );
}

export default PlantCard;