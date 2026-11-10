import { useState } from "react";
import { spaces } from "../data/spaces";

import FilterBar from "../components/FilterBar";
import SpaceCard from "../components/SpaceCard";
//Feature 2&3
function Results() {

  const [selectedType, setSelectedType] = useState("");
  const [powerOnly, setPowerOnly] = useState(false);

  const filteredSpaces = spaces.filter((space) => {

    const typeMatch =
      selectedType === "" ||
      space.type === selectedType;

    const powerMatch =
      !powerOnly ||
      space.power;

    return typeMatch && powerMatch;
  });

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">

        Find Library Spaces

      </h1>

      <FilterBar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        powerOnly={powerOnly}
        setPowerOnly={setPowerOnly}
      />

      <div className="grid gap-4">
       {
          filteredSpaces.length === 0 && (

          <div className="bg-white p-4 rounded-xl">

          No matching spaces found.

          </div>

          )
      } 

        {
          filteredSpaces.map((space) => (

            <SpaceCard
              key={space.id}
              space={space}
            />

          ))
        }

      </div>

    </div>
  );
}

export default Results;
