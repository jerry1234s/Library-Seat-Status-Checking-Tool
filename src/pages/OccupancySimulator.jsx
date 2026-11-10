import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getSpaces,
  saveSpaces,
  resetSpaces
} from "../utils/storageUtils";

import {
  getOccupancyPercentage
} from "../utils/statusUtils";

function OccupancySimulator() {

  const navigate = useNavigate();

  const [spaces, setSpaces] =
    useState(getSpaces());

  function handleSeatChange(
    id,
    value
  ) {

    let seatValue =
      Math.floor(
        Number(value) || 0
      );

    const updatedSpaces =
      spaces.map((space) => {

        if (space.id !== id) {
          return space;
        }

        let availableSeats =
          seatValue;

        if (availableSeats < 0) {
          availableSeats = 0;
        }

        if (
          availableSeats >
          space.totalSeats
        ) {
          availableSeats =
            space.totalSeats;
        }

        return {
          ...space,
          availableSeats
        };

      });

    setSpaces(updatedSpaces);

  }

  function handleSave() {

    saveSpaces(spaces);

    alert(
      "Occupancy data updated successfully."
    );

  }

  function handleReset() {

    const confirmed =
      window.confirm(
        "Reset all prototype data to default values?"
      );

    if (!confirmed) {
      return;
    }

    resetSpaces();

    setSpaces(
      getSpaces()
    );

    alert(
      "Prototype data reset successfully."
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
              bg-blue-600
              text-white
              rounded-lg
            "
          >
            Availability Overview
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow p-6 mb-6">

          <h1 className="text-3xl font-bold mb-3">
            Prototype Occupancy Editor
          </h1>

          <div className="text-gray-700 space-y-1">

            <p>
              For demonstration purposes only.
            </p>

            <p>
              This tool simulates occupancy updates and
              is not connected to any actual library system.
            </p>

          </div>

        </div>

        <div className="space-y-4">

          {
            spaces.map((space) => {

              const occupancy =
                getOccupancyPercentage(
                  space.totalSeats,
                  space.availableSeats
                );

              return (

                <div
                  key={space.id}
                  className="
                    bg-white
                    rounded-2xl
                    shadow
                    p-5
                  "
                >

                  <h2 className="font-bold text-lg">
                    {space.zone}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Total Seats:
                    {" "}
                    {space.totalSeats}
                  </p>

                  <p className="text-gray-600">
                    Available Seats:
                    {" "}
                    {space.availableSeats}
                    {" / "}
                    {space.totalSeats}
                  </p>

                  <p className="text-gray-600 mb-4">
                    Current Occupancy:
                    {" "}
                    {occupancy}%
                  </p>

                  <input
                    type="number"
                    min="0"
                    max={space.totalSeats}
                    step="1"
                    value={space.availableSeats}
                    onChange={(e) =>
                      handleSeatChange(
                        space.id,
                        e.target.value
                      )
                    }
                    className="
                      border
                      rounded-lg
                      px-3
                      py-2
                      w-40
                    "
                  />

                </div>

              );

            })
          }

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={handleSave}
            className="
              bg-green-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-green-700
            "
          >
            Save Changes
          </button>

          <button
            onClick={handleReset}
            className="
              bg-red-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-red-700
            "
          >
            Reset Prototype Data
          </button>

        </div>

      </div>

    </div>

  );

}

export default OccupancySimulator;
