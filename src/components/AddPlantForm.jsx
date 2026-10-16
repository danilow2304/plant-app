import { useState } from "react";

export default function AddPlantForm({ categories, onAdd }) {
  const empty = {
    name: "",
    category: categories[0],
    light: "",
    water: "",
    description: "",
  };
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Plant name is required.");
      return;
    }
    onAdd({ ...form, name: form.name.trim() });
    setForm(empty);
    setError("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <input name="light" placeholder="Light needs" value={form.light} onChange={handleChange} />
      <input name="water" placeholder="Watering" value={form.water} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Save plant</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}