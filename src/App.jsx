import { useState } from "react";
import initialPlants from "./data/plants";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";

export default function App() {
  const [plants, setPlants] = useState(
    initialPlants.map((p) => ({ ...p, favorite: false }))
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Indoor", "Succulent", "Outdoor", "Herb"];

  const visiblePlants = plants.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) =>
    setPlants(
      plants.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p))
    );

  const removePlant = (id) => setPlants(plants.filter((p) => p.id !== id));

  return (
    <div className="app">
      <Header />
      <Navigation
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />
      <main>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <PlantList
          plants={visiblePlants}
          onToggleFavorite={toggleFavorite}
          onRemove={removePlant}
        />
      </main>
      <Footer />
    </div>
  );
}