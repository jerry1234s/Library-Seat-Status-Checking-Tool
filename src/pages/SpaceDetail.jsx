import { Link, useParams } from "react-router-dom";
import { spaces } from "../data/spaces";

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
