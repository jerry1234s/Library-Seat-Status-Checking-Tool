function FilterBar({
  selectedTypes,
  setSelectedTypes,
  powerOnly,
  setPowerOnly
}) {

  const spaceTypes = [
    "Individual Study",
    "Group Discussion",
    "Relaxation"
  ];

  function handleTypeChange(
    type,
    checked
  ) {

    if (checked) {

      setSelectedTypes([
        ...selectedTypes,
        type
      ]);

      return;
    }

    setSelectedTypes(
      selectedTypes.filter(
        (item) => item !== type
      )
    );

  }

  return (

    <div className="mb-6">

      <h2 className="font-semibold mb-3">
        Space Discovery & Filtering
      </h2>

      <div className="mb-4">

        <p className="font-medium mb-2">
          Selected Space Types
        </p>

        <div className="space-y-2">

          {
            spaceTypes.map((type) => (

              <label
                key={type}
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <input
                  type="checkbox"
                  checked={
                    selectedTypes.includes(
                      type
                    )
                  }
                  onChange={(e) =>
                    handleTypeChange(
                      type,
                      e.target.checked
                    )
                  }
                />

                {type}

              </label>

            ))
          }

        </div>

      </div>

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={powerOnly}
          onChange={(e) =>
            setPowerOnly(
              e.target.checked
            )
          }
        />

        Need Power Outlet

      </label>

    </div>

  );

}

export default FilterBar;
