export default function Navigation({ categories, selected, onSelect }) {
  return (
    <nav>
      {categories.map((c) => (
        <button
          key={c}
          className={c === selected ? "active" : ""}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </nav>
  );
}