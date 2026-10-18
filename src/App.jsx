import { useState } from "react";
import plants from "./data/plants";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import PlantList from "./components/PlantList";
import Footer from "./components/Footer";
import "./App.css";

// Starting values for every filter. Reset simply restores this object.
const emptyFilters = {
  commonName: "",
  scientificName: "",
  sunlight: "",
  soil: "",
  bloomSeason: "",
};

function App() {
  // useState: one object holds the current value of every search/filter control.
  const [filters, setFilters] = useState(emptyFilters);

  // Event handler passed down to Navigation. Navigation calls it with
  // the field name and new value whenever the user changes a control.
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  // Event handler for the Reset button.
  const handleReset = () => setFilters(emptyFilters);

  // Array filtering: keep a plant only if it passes every active filter.
  const visiblePlants = plants.filter((plant) => {
    const matchesCommon = plant.commonName
      .toLowerCase()
      .includes(filters.commonName.trim().toLowerCase());
    const matchesScientific = plant.scientificName
      .toLowerCase()
      .includes(filters.scientificName.trim().toLowerCase());
    const matchesSunlight = !filters.sunlight || plant.sunlight === filters.sunlight;
    const matchesSoil = !filters.soil || plant.soil === filters.soil;
    const matchesBloom = !filters.bloomSeason || plant.bloomSeason === filters.bloomSeason;

    return (
      matchesCommon &&
      matchesScientific &&
      matchesSunlight &&
      matchesSoil &&
      matchesBloom
    );
  });

  // True when at least one control differs from its starting value.
  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  return (
    <div className="app">
      <Header />
      <Navigation
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        hasActiveFilters={hasActiveFilters}
        resultCount={visiblePlants.length}
        totalCount={plants.length}
      />
      <PlantList plants={visiblePlants} onReset={handleReset} />
      <Footer />
    </div>
  );
}

export default App;