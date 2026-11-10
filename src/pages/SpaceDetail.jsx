import { Link, useParams } from "react-router-dom";
import { spaces } from "../data/spaces";
import { getStatus } from "../utils/statusUtils";

function SpaceDetail() {

  const { id } = useParams();

  const space =
    spaces.find(
      item => item.id === Number(id)
    );

  if (!space) {
    return (
      <div className="p-6">
        Space not found
      </div>
    );
  }

  const status =
    getStatus(space.occupancy);

  return (

    <div className="p-6">

      <div className="flex gap-3 mb-6">

        <Link
          to="/results"
          className="
            px-4
            py-2
            bg-blue-600
            text-white
            rounded-lg
            hover:bg-blue-700
          "
        >
          Back to Results
        </Link>

        <Link
          to="/availability"
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
        </Link>

      </div>

      <h1 className="text-3xl font-bold mb-6">
        {space.zone}
      </h1>

      <div className="border rounded-2xl p-5">

        <p>
          Floor: {space.floor}
        </p>

        <p>
          Type: {space.type}
        </p>

        <p>
          Occupancy: {space.occupancy}%
        </p>

        <p>
          Available Seats: {space.availableSeats}
        </p>

        <p>
          Environment: {space.environment}
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

      <div className="mt-6 border rounded-2xl p-5">

        <h2 className="font-bold mb-3">
          Location on Library Map
        </h2>

        <div className="relative">

          <img
            src="/images/library-floor-plan.jpg"
            alt="Library Floor Plan"
            className="rounded-xl w-full"
          />

          {
            space.id === 1 && (
              <div
                className={`
                  absolute
                  top-[35%]
                  left-[45%]
                  w-6
                  h-6
                  ${status.bg}
                  rounded-full
                  border-2
                  border-white
                `}
              />
            )
          }

          {
            space.id === 2 && (
              <div
                className={`
                  absolute
                  top-[30%]
                  left-[68%]
                  w-6
                  h-6
                  ${status.bg}
                  rounded-full
                  border-2
                  border-white
                `}
              />
            )
          }

          {
            space.id === 3 && (
              <div
                className={`
                  absolute
                  top-[55%]
                  left-[25%]
                  w-6
                  h-6
                  ${status.bg}
                  rounded-full
                  border-2
                  border-white
                `}
              />
            )
          }

          {
            space.id === 4 && (
              <div
                className={`
                  absolute
                  top-[78%]
                  left-[85%]
                  w-6
                  h-6
                  ${status.bg}
                  rounded-full
                  border-2
                  border-white
                `}
              />
            )
          }

        </div>

      </div>

      <div className="mt-6 rounded-2xl border p-4">

        <h2 className="font-bold mb-2">
          Prototype Note
        </h2>

        <p>
          Information shown is prototype data.
          This design supports pre-visit
          space discovery and comparison.
        </p>

      </div>

    </div>

  );
}

export default SpaceDetail;
