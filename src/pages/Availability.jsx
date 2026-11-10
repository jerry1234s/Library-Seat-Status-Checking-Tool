import { useNavigate } from "react-router-dom";
import { spaces } from "../data/spaces";
import { getStatus } from "../utils/statusUtils";

function Availability() {

  const navigate = useNavigate();

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

        {/* Current Space Status */}

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="text-xl font-bold mb-4">
            Current Space Status
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {
              spaces.map((space) => {

                const status =
                  getStatus(space.occupancy);

                return (

                  <div
                    key={space.id}
                    className="border rounded-xl p-4"
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
                      Available Seats: {space.availableSeats}
                    </p>

                    <p>
                      Occupancy: {space.occupancy}%
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

                  </div>

                );

              })
            }

          </div>

        </div>

        {/* Interactive Map */}

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="text-xl font-bold mb-2">
            Interactive Map
          </h2>

          <p className="text-gray-600 mb-4">
            Select an area to view occupancy,
            environment and power availability.
          </p>

          <div className="relative">

            <img
              src="/images/library-floor-plan.jpg"
              alt="Library Floor Plan"
              className="rounded-xl w-full"
            />

            {
              spaces.map((space) => (

                <button
                  key={space.id}
                  className={`
                    absolute
                    w-5
                    h-5
                    ${getStatus(space.occupancy).bg}
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

              ))
            }

          </div>

        </div>

        {/* Legend */}

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="font-bold mb-3">
            Availability Legend
          </h2>

          <div className="space-y-3">

            <div className="flex items-center gap-3">

              <div className="w-4 h-4 rounded-full bg-green-500"></div>

              <span>
                Available
              </span>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>

              <span>
                Busy
              </span>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-4 h-4 rounded-full bg-red-500"></div>

              <span>
                Nearly Full
              </span>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-2 gap-4">

          <button
            onClick={() =>
              navigate(
                "/results?type=Individual%20Study"
              )
            }
            className="
              bg-blue-600
              text-white
              rounded-xl
              p-4
              font-semibold
            "
          >
            Find Study Spaces
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
