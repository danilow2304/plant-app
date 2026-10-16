import { useState } from "react";
import plants from "./data/plants";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Indoor", "Succulent", "Outdoor", "Herb"];

  const visiblePlants = plants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Navigation categories={categories} />
      <main>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <PlantList plants={visiblePlants} />
      </main>
      <Footer />
    </div>
  );
}