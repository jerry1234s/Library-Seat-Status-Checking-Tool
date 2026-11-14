function FilterBar({
  selectedType,
  setSelectedType,
  powerOnly,
  setPowerOnly,
  excludedType,
  setExcludedType
}) {

  return (

    <div className="mb-6">

      <h2 className="font-semibold mb-3">
        Space Discovery & Filtering
      </h2>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border rounded-lg p-2 w-full mb-4"
      >

        <option value="">
          All Space Types
        </option>

        <option value="Individual Study">
          Individual Study
        </option>

        <option value="Group Discussion">
          Group Discussion
        </option>

        <option value="Relaxation">
          Relaxation
        </option>

      </select>

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={powerOnly}
          onChange={(e) => setPowerOnly(e.target.checked)}
        />

        Need Power Outlet

      </label>

      <select
        value={excludedType}
        onChange={(e) => setExcludedType(e.target.value)}
        className="border rounded-lg p-2 w-full mt-4"
      >

        <option value="">
          Do Not Exclude a Space Type
        </option>

        <option value="Individual Study">
          Exclude Individual Study
        </option>

        <option value="Group Discussion">
          Exclude Group Discussion
        </option>

        <option value="Relaxation">
          Exclude Relaxation
        </option>

      </select>

    </div>

  );
}

export default FilterBar;
