import { useState } from "react";
import plants from "./data/plants";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";
import "./App.css";

const emptyFilters = {
  commonName: "",
  scientificName: "",
  sunlight: "",
  soil: "",
  bloomSeason: "",
};

function App() {
  const [filters, setFilters] = useState(emptyFilters);

  function handleChange(event) {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  }

  function handleReset() {
    setFilters(emptyFilters);
  }

  const visiblePlants = plants.filter(
    (plant) =>
      plant.commonName.toLowerCase().includes(filters.commonName.toLowerCase()) &&
      plant.scientificName.toLowerCase().includes(filters.scientificName.toLowerCase()) &&
      (filters.sunlight === "" || plant.sunlight === filters.sunlight) &&
      (filters.soil === "" || plant.soil === filters.soil) &&
      (filters.bloomSeason === "" || plant.bloomSeason === filters.bloomSeason)
  );

  return (
    <div>
      <Header />
      <Navigation filters={filters} onChange={handleChange} onReset={handleReset} />
      <PlantList plants={visiblePlants} />
      <Footer />
    </div>
  );
}

export default App;