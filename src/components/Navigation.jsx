const sunlightOptions = ["Full Sun", "Partial Shade", "Full Shade"];
const soilOptions = ["Clay", "Loamy", "Moist", "Sandy", "Well-Drained"];
const bloomOptions = ["Spring", "Summer", "Fall", "Winter"];

// Props come down from App: current values plus callbacks to change them.
function Navigation({
  filters,
  onFilterChange,
  onReset,
  hasActiveFilters,
  resultCount,
  totalCount,
}) {
  // One handler serves every control. The input's name matches a key in filters.
  const handleChange = (event) => {
    onFilterChange(event.target.name, event.target.value);
  };

  return (
    <nav className="filters" aria-label="Search and filter plants">
      <div className="filter-group">
        <label htmlFor="commonName">Common name</label>
        <input
          id="commonName"
          name="commonName"
          type="text"
          placeholder="e.g. Lavender"
          value={filters.commonName}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="scientificName">Scientific name</label>
        <input
          id="scientificName"
          name="scientificName"
          type="text"
          placeholder="e.g. Lavandula"
          value={filters.scientificName}
          onChange={handleChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="sunlight">Sunlight</label>
        <select
          id="sunlight"
          name="sunlight"
          value={filters.sunlight}
          onChange={handleChange}
        >
          <option value="">All</option>
          {sunlightOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="soil">Soil type</label>
        <select id="soil" name="soil" value={filters.soil} onChange={handleChange}>
          <option value="">All</option>
          {soilOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="bloomSeason">Bloom season</label>
        <select
          id="bloomSeason"
          name="bloomSeason"
          value={filters.bloomSeason}
          onChange={handleChange}
        >
          <option value="">All</option>
          {bloomOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-actions">
        <button type="button" onClick={onReset} disabled={!hasActiveFilters}>
          Reset filters
        </button>
        <p className="result-count" aria-live="polite">
          Showing {resultCount} of {totalCount} plants
        </p>
      </div>
    </nav>
  );
}

export default Navigation;