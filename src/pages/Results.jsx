import { useState } from "react";
import {
  useSearchParams,
  useNavigate
} from "react-router-dom";

import { spaces } from "../data/spaces";
import FilterBar from "../components/FilterBar";
import SpaceCard from "../components/SpaceCard";

function Results() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const initialType =
    searchParams.get("type") || "";

  const initialPower =
    searchParams.get("power") === "true";

  const [selectedType, setSelectedType] =
    useState(initialType);

  const [powerOnly, setPowerOnly] =
    useState(initialPower);

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

        <div className="mb-6">

          <button
            onClick={() => navigate("/")}
            className="
              px-4
              py-2
              bg-gray-700
              text-white
              rounded-lg
              hover:bg-gray-800
            "
          >
            Home
          </button>

        </div>

        <h1 className="text-3xl font-bold mb-2">
          Find Library Spaces
        </h1>

        <p className="text-gray-600 mb-6">
          Discover study spaces that match
          your purpose and requirements.
        </p>

        {
          selectedType && (

            <div
              className="
                mb-4
                bg-blue-100
                text-blue-800
                px-4
                py-2
                rounded-xl
              "
            >
              Showing: {selectedType}
            </div>

          )
        }

        {
          powerOnly && (

            <div
              className="
                mb-4
                bg-green-100
                text-green-800
                px-4
                py-2
                rounded-xl
              "
            >
              Power Outlet Filter Active
            </div>

          )
        }

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
