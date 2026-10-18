function PlantCard({ commonName, scientificName, sunlight, soil, bloomSeason }) {
  return (
    <article className="plant-card">
      <h2>{commonName}</h2>
      <p className="scientific">{scientificName}</p>
      <dl>
        <dt>Sunlight</dt>
        <dd>{sunlight}</dd>
        <dt>Soil</dt>
        <dd>{soil}</dd>
        <dt>Blooms</dt>
        <dd>{bloomSeason}</dd>
      </dl>
    </article>
  );
}

export default PlantCard;