import { useNavigate } from "react-router-dom";
import { getSpaces } from "../utils/storageUtils";

import {
  LIBRARY_ENTRANCE,
  STAIR
} from "../data/spaces";

import {
  getAvailabilityPercentage,
  getStatus
} from "../utils/statusUtils";

function Availability() {

  const navigate = useNavigate();
  const spaces = getSpaces();

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-700 text-white p-6">

        <h1 className="text-3xl font-bold">
          Library Availability Overview
        </h1>

        <p className="mt-2">
          Check space availability before travelling
          to the library.
        </p>

      </div>

      <div className="max-w-6xl mx-auto p-6">

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

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="text-xl font-bold mb-4">
            Current Space Status
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {
              spaces.map((space) => {

                const status =
                  getStatus(
                    space.totalSeats,
                    space.availableSeats
                  );

                const availability =
                  getAvailabilityPercentage(
                    space.totalSeats,
                    space.availableSeats
                  );

                return (

                  <div
                    key={space.id}
                    className="
                      border
                      rounded-xl
                      p-4
                      cursor-pointer
                      hover:bg-gray-50
                      hover:shadow-md
                      transition
                    "
                    onClick={() =>
                      navigate(`/space/${space.id}`)
                    }
                  >

                    <div className="flex justify-between">

                      <h3 className="font-semibold">
                        {space.zone}
                      </h3>

                      <span
                        className={`
                          ${status.bg}
                          text-white
                          text-xs
                          px-2
                          py-1
                          rounded-full
                        `}
                      >
                        {status.label}
                      </span>

                    </div>

                    <p className="mt-2">
                      Floor: {space.floor}
                    </p>

                    <p>
                      Total Seats:
                      {" "}
                      {space.totalSeats}
                    </p>

                    <p>
                      Available Seats:
                      {" "}
                      {space.availableSeats}
                      {" / "}
                      {space.totalSeats}
                    </p>

                    <p>
                      Available Seats Percentage:
                      {" "}
                      {availability}%
                    </p>

                    <p>
                      Power:
                      {" "}
                      {
                        space.power
                          ? "✅ Available"
                          : "❌ Not Available"
                      }
                    </p>

                    <p className="mt-3 text-blue-600 text-sm font-medium">
                      View Details →
                    </p>

                  </div>

                );

              })
            }

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="text-xl font-bold mb-2">
            Interactive Map
          </h2>

          <p className="text-gray-600 mb-4">
            Select an area to view availability,
            environment and power availability.
          </p>

          <div className="mb-4 rounded-xl bg-gray-50 p-4 text-sm">

            <h3 className="font-bold mb-2">
              Map Guide
            </h3>

            <p>
              <span className="text-green-600 font-semibold">
                Green
              </span>
              {" = Available (<60% occupied)"}
            </p>

            <p>
              <span className="text-yellow-600 font-semibold">
                Yellow
              </span>
              {" = Busy (60%-79% occupied)"}
            </p>

            <p>
              <span className="text-red-600 font-semibold">
                Red
              </span>
              {" = Nearly Full (≥80% occupied)"}
            </p>

            <p>
              ⚫ = Library Entrance
            </p>

            <p>
              🪜 = Stair
            </p>

          </div>

          <div className="relative">

            <img
              src="/images/library-floor-plan.jpg"
              alt="Library Floor Plan"
              className="rounded-xl w-full"
            />

            <div
              className="
                absolute
                flex
                items-center
                gap-2
              "
              style={{
                top: LIBRARY_ENTRANCE.markerTop,
                left: LIBRARY_ENTRANCE.markerLeft
              }}
            >

              <span
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-gray-800
                  border-2
                  border-white
                  shadow
                "
              ></span>

              <span
                className="
                  bg-gray-800
                  text-white
                  text-xs
                  px-2
                  py-1
                  rounded
                  whitespace-nowrap
                "
              >
                {LIBRARY_ENTRANCE.label}
              </span>

            </div>

            <div
              className="
                absolute
                flex
                items-center
                gap-2
              "
              style={{
                top: STAIR.markerTop,
                left: STAIR.markerLeft
              }}
            >

              <span
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-blue-700
                  border-2
                  border-white
                  shadow
                  flex
                  items-center
                  justify-center
                  text-white
                  text-xs
                "
              >
                📶
              </span>

              <span
                className="
                  bg-blue-700
                  text-white
                  text-xs
                  px-2
                  py-1
                  rounded
                  whitespace-nowrap
                "
              >
                {STAIR.label}
              </span>

            </div>

            {
              spaces.map((space) => {

                const status =
                  getStatus(
                    space.totalSeats,
                    space.availableSeats
                  );

                return (

                  <button
                    key={space.id}
                    className={`
                      absolute
                      w-5
                      h-5
                      ${status.bg}
                      rounded-full
                      border-2
                      border-white
                      shadow
                      hover:scale-110
                      transition
                    `}
                    style={{
                      top: space.markerTop,
                      left: space.markerLeft
                    }}
                    onClick={() =>
                      navigate(`/space/${space.id}`)
                    }
                    title={space.zone}
                  />

                );

              })
            }

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <button
            onClick={() =>
              navigate("/results")
            }
            className="
              bg-blue-600
              text-white
              rounded-xl
              p-4
              font-semibold
            "
          >
            Find Library Spaces
          </button>

          <button
            onClick={() =>
              navigate(
                "/results?power=true"
              )
            }
            className="
              bg-green-600
              text-white
              rounded-xl
              p-4
              font-semibold
            "
          >
            Find Powered Spaces
          </button>

        </div>

      </div>

    </div>

  );

}

export default Availability;
