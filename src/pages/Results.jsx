import { useEffect, useState } from "react";
import {
  useSearchParams,
  useNavigate
} from "react-router-dom";

import { getSpaces }
  from "../utils/storageUtils";

import FilterBar from "../components/FilterBar";
import SpaceCard from "../components/SpaceCard";

function Results() {

  const navigate = useNavigate();

  const spaces =
    getSpaces();

  const [searchParams, setSearchParams] =
    useSearchParams();

  const initialType =
    searchParams.get("type") || "";

  const initialPower =
    searchParams.get("power") === "true";

  const initialExcludedType =
    searchParams.get("excludeType") || "";

  const [selectedType, setSelectedType] =
    useState(initialType);

  const [powerOnly, setPowerOnly] =
    useState(initialPower);

  const [excludedType, setExcludedType] =
    useState(initialExcludedType);

  useEffect(() => {

    const updatedParams =
      new URLSearchParams(searchParams);

    if (selectedType) {
      updatedParams.set("type", selectedType);
    }
    else {
      updatedParams.delete("type");
    }

    if (powerOnly) {
      updatedParams.set("power", "true");
    }
    else {
      updatedParams.delete("power");
    }

    if (excludedType) {
      updatedParams.set("excludeType", excludedType);
    }
    else {
      updatedParams.delete("excludeType");
    }

    if (
      updatedParams.toString() !==
      searchParams.toString()
    ) {
      setSearchParams(
        updatedParams,
        { replace: true }
      );
    }

  }, [
    selectedType,
    powerOnly,
    excludedType,
    searchParams,
    setSearchParams
  ]);

  const filteredSpaces = spaces.filter(
    (space) => {

      const typeMatch =
        selectedType === "" ||
        space.type === selectedType;

      const powerMatch =
        !powerOnly ||
        space.power;

      const excludedTypeMatch =
        excludedType === "" ||
        space.type !== excludedType;

      return (
        typeMatch &&
        powerMatch &&
        excludedTypeMatch
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

        {
          excludedType && (

            <div
              className="
                mb-4
                bg-red-100
                text-red-800
                px-4
                py-2
                rounded-xl
              "
            >
              Excluding: {excludedType}
            </div>

          )
        }

        <FilterBar
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          powerOnly={powerOnly}
          setPowerOnly={setPowerOnly}
          excludedType={excludedType}
          setExcludedType={setExcludedType}
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
