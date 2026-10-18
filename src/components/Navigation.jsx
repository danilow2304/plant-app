function Navigation({ filters, onChange, onReset }) {
  return (
    <nav className="filters">
      <div className="filter-group">
        <label>Common name</label>
        <input
          type="text"
          name="commonName"
          value={filters.commonName}
          onChange={onChange}
        />
      </div>

      <div className="filter-group">
        <label>Scientific name</label>
        <input
          type="text"
          name="scientificName"
          value={filters.scientificName}
          onChange={onChange}
        />
      </div>

      <div className="filter-group">
        <label>Sunlight</label>
        <select name="sunlight" value={filters.sunlight} onChange={onChange}>
          <option value="">All</option>
          <option value="Full Sun">Full Sun</option>
          <option value="Partial Shade">Partial Shade</option>
          <option value="Full Shade">Full Shade</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Soil type</label>
        <select name="soil" value={filters.soil} onChange={onChange}>
          <option value="">All</option>
          <option value="Clay">Clay</option>
          <option value="Loamy">Loamy</option>
          <option value="Moist">Moist</option>
          <option value="Sandy">Sandy</option>
          <option value="Well-Drained">Well-Drained</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Bloom season</label>
        <select name="bloomSeason" value={filters.bloomSeason} onChange={onChange}>
          <option value="">All</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
      </div>

      <button onClick={onReset}>Reset filters</button>
    </nav>
  );
}

export default Navigation;