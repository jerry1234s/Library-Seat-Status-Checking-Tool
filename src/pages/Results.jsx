import { useEffect, useState } from "react";
import {
  useSearchParams,
  useNavigate
} from "react-router-dom";

import {
  getSpaces,
  getLastUpdated
} from "../utils/storageUtils";

import FilterBar from "../components/FilterBar";
import SpaceCard from "../components/SpaceCard";

const ALL_TYPES = [
  "Individual Study",
  "Group Discussion",
  "Relaxation"
];

function Results() {

  const navigate = useNavigate();

  const spaces =
    getSpaces();

  const lastUpdated =
    getLastUpdated();

  const [searchParams, setSearchParams] =
    useSearchParams();

  const initialTypes =
    searchParams.get("types")
      ? searchParams
          .get("types")
          .split(",")
      : ALL_TYPES;

  const initialPower =
    searchParams.get("power") === "true";

  const [
    selectedTypes,
    setSelectedTypes
  ] = useState(initialTypes);

  const [
    powerOnly,
    setPowerOnly
  ] = useState(initialPower);

  const [
    sortBy,
    setSortBy
  ] = useState(
    "availability-desc"
  );

  useEffect(() => {

    const updatedParams =
      new URLSearchParams(
        searchParams
      );

    if (
      selectedTypes.length > 0 &&
      selectedTypes.length <
      ALL_TYPES.length
    ) {

      updatedParams.set(
        "types",
        selectedTypes.join(",")
      );

    }
    else {

      updatedParams.delete(
        "types"
      );

    }

    if (powerOnly) {

      updatedParams.set(
        "power",
        "true"
      );

    }
    else {

      updatedParams.delete(
        "power"
      );

    }

    if (
      updatedParams.toString() !==
      searchParams.toString()
    ) {

      setSearchParams(
        updatedParams,
        {
          replace: true
        }
      );

    }

  }, [
    selectedTypes,
    powerOnly,
    searchParams,
    setSearchParams
  ]);

  const filteredSpaces =
    spaces.filter(
      (space) => {

        const typeMatch =
          selectedTypes.includes(
            space.type
          );

        const powerMatch =
          !powerOnly ||
          space.power;

        return (
          typeMatch &&
          powerMatch
        );

      }
    );

  const sortedSpaces =
    [...filteredSpaces];

  if (
    sortBy ===
    "availability-desc"
  ) {

    sortedSpaces.sort(
      (a, b) => {

        const seatDiff =
          b.availableSeats -
          a.availableSeats;

        if (seatDiff !== 0) {
          return seatDiff;
        }

        const aPercentage =
          a.availableSeats /
          a.totalSeats;

        const bPercentage =
          b.availableSeats /
          b.totalSeats;

        return (
          bPercentage -
          aPercentage
        );

      }
    );

  }

  if (
    sortBy ===
    "availability-asc"
  ) {

    sortedSpaces.sort(
      (a, b) => {

        const seatDiff =
          a.availableSeats -
          b.availableSeats;

        if (seatDiff !== 0) {
          return seatDiff;
        }

        const aPercentage =
          a.availableSeats /
          a.totalSeats;

        const bPercentage =
          b.availableSeats /
          b.totalSeats;

        return (
          aPercentage -
          bPercentage
        );

      }
    );

  }

  if (
    sortBy ===
    "type"
  ) {

    const typeOrder = {

      "Individual Study": 1,

      "Group Discussion": 2,

      "Relaxation": 3

    };

    sortedSpaces.sort(
      (a, b) =>
        typeOrder[a.type] -
        typeOrder[b.type]
    );

  }

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        <div className="flex gap-3 mb-6">

          <button
            onClick={() =>
              navigate("/")
            }
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

          <button
            onClick={() =>
              navigate("/availability")
            }
            className="
              px-4
              py-2
              bg-green-600
              text-white
              rounded-lg
              hover:bg-green-700
            "
          >
            Availability Overview
          </button>

        </div>

        <h1 className="text-3xl font-bold mb-2">
          Find Library Spaces
        </h1>

        <p className="text-gray-600 mb-2">
          Discover study spaces that match
          your purpose and requirements.
        </p>

        <p className="text-gray-500 mb-6">

          Last Updated:

          {" "}

          {
            lastUpdated ||
            "Not Available"
          }

        </p>

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
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          powerOnly={powerOnly}
          setPowerOnly={setPowerOnly}
        />

        <div className="mb-6">

          <label className="font-medium mr-3">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
            className="
              border
              rounded-lg
              px-3
              py-2
            "
          >

            <option value="availability-desc">
              Available Seats Descending↓
            </option>

            <option value="availability-asc">
              Available Seats Ascending ↑ 
            </option>

            <option value="type">
              Space Type
            </option>

          </select>

        </div>

        {
          sortedSpaces.length === 0 && (

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
            sortedSpaces.map(
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
