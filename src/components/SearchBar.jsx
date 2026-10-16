export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Search plants"
    />
  );
}