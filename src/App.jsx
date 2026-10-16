import { useState } from "react";
import plants from "./data/plants";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";

export default function App() {
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
        <PlantList plants={visiblePlants} />
      </main>
      <Footer />
    </div>
  );
}