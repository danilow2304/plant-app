export default function PlantCard({ plant }) {
    const { name, category, light, water, description } = plant;
    return (
        <article className="plant-card">
            <h3>{name}</h3>
            <span className="tag">{category}</span>
            <p>{description}</p>
            <p><strong>Light:</strong> {light}</p>
            <p><strong>Water:</strong> {water}</p>
        </article>
    );
}