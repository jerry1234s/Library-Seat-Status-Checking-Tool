import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { spaces } from "../data/spaces";
import FilterBar from "../components/FilterBar";
import SpaceCard from "../components/SpaceCard";

function Results() {

  const [searchParams] = useSearchParams();

  const initialType =
    searchParams.get("type") || "";

  const [selectedType, setSelectedType] =
    useState(initialType);

  const [powerOnly, setPowerOnly] =
    useState(false);

  const filteredSpaces = spaces.filter(
    (space) => {

      const typeMatch =
        selectedType === "" ||
        space.type === selectedType;

      const powerMatch =
        !powerOnly ||
        space.power;

      return (
        typeMatch &&
        powerMatch
      );
    }
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Find Library Spaces
        </h1>

        <p className="text-gray-600 mb-6">
          Discover study spaces that match your
          purpose and requirements.
        </p>

        <FilterBar
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          powerOnly={powerOnly}
          setPowerOnly={setPowerOnly}
        />

        {
          filteredSpaces.length === 0 && (

            <div
              className="
                bg-white
                rounded-xl
                p-4
                shadow
              "
            >
              No matching spaces found.
            </div>

          )
        }

        <div className="grid gap-4">

          {
            filteredSpaces.map(
              (space) => (

                <SpaceCard
                  key={space.id}
                  space={space}
                />

              )
            )
          }

        </div>

      </div>

    </div>
  );
}

export default Results;
