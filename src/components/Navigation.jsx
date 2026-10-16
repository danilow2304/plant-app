export default function Navigation({ categories }) {
  return (
    <nav>
      {categories.map((c) => (
        <button key={c}>{c}</button>
      ))}
    </nav>
  );
}