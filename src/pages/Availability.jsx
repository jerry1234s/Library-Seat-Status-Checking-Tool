import { useNavigate } from "react-router-dom";
//feature 1
function Availability() {

  const navigate = useNavigate();

  const zones = [
    {
      id: 1,
      name: "Silent Study Zone",
      floor: "3F",
      occupancy: 45,
      availableSeats: 22,
      power: true
    },

    {
      id: 2,
      name: "Group Discussion Area",
      floor: "3F",
      occupancy: 82,
      availableSeats: 5,
      power: true
    },

    {
      id: 3,
      name: "East Lounge",
      floor: "3F",
      occupancy: 30,
      availableSeats: 12,
      power: false
    },

    {
      id: 4,
      name: "Computer Area",
      floor: "2F",
      occupancy: 65,
      availableSeats: 15,
      power: true
    }
  ];

  const getStatus = (occupancy) => {

    if (occupancy >= 80) {
      return {
        label: "Nearly Full",
        bg: "bg-red-500"
      };
    }

    if (occupancy >= 60) {
      return {
        label: "Busy",
        bg: "bg-yellow-500"
      };
    }

    return {
      label: "Available",
      bg: "bg-green-500"
    };
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-blue-700 text-white p-6">

        <h1 className="text-3xl font-bold">
          Library Availability Overview
        </h1>

        <p className="mt-2">
          Check space availability before
          travelling to the library.
        </p>

      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Quick Summary */}

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="text-xl font-bold mb-4">
            Current Space Status
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {
              zones.map((zone) => {

                const status =
                  getStatus(zone.occupancy);

                return (

                  <div
                    key={zone.id}
                    className="border rounded-xl p-4"
                  >

                    <div className="flex justify-between">

                      <h3 className="font-semibold">
                        {zone.name}
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
                      Floor: {zone.floor}
                    </p>

                    <p>
                      Available Seats:
                      {" "}
                      {zone.availableSeats}
                    </p>

                    <p>
                      Occupancy:
                      {" "}
                      {zone.occupancy}%
                    </p>

                  </div>

                );
              })
            }

          </div>

        </div>

        {/* Floor Map */}

        <div className="bg-white rounded-2xl shadow p-5 mb-6">

          <h2 className="text-xl font-bold mb-2">
            Interactive Floor Map
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

            {/* Demo Overlay Markers */}

            <button
              className="
                absolute
                top-[35%]
                left-[45%]
                w-6
                h-6
                bg-green-500
                rounded-full
                border-2
                border-white
              "
              onClick={() => navigate("/space/1")}
            />

            <button
              className="
                absolute
                top-[30%]
                left-[68%]
                w-6
                h-6
                bg-red-500
                rounded-full
                border-2
                border-white
              "
              onClick={() => navigate("/space/2")}
            />

            <button
              className="
                absolute
                top-[55%]
                left-[25%]
                w-6
                h-6
                bg-green-500
                rounded-full
                border-2
                border-white
              "
              onClick={() => navigate("/space/3")}
            />

            <button
              className="
                absolute
                top-[78%]
                left-[85%]
                w-6
                h-6
                bg-yellow-500
                rounded-full
                border-2
                border-white
              "
              onClick={() => navigate("/space/4")}
            />

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
            onClick={() => navigate("/results")}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              rounded-xl
              p-4
              font-semibold
            "
          >
            Find Study Spaces
          </button>

          <button
            onClick={() => navigate("/results?power=true")}
            className="
              bg-green-600
              hover:bg-green-700
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
