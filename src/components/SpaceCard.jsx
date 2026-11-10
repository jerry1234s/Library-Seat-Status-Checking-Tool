import { useNavigate } from "react-router-dom";
import AvailabilityBadge from "./AvailabilityBadge";

function SpaceCard({ space }) {

  const navigate = useNavigate();

  return (
    <div className="border rounded-2xl p-4 shadow-sm">

      <div className="flex justify-between items-center">

        <h2 className="font-bold text-lg">
          {space.zone}
        </h2>

        <AvailabilityBadge
          occupancy={space.occupancy}
        />

      </div>

      <p className="mt-2">
        Floor: {space.floor}
      </p>

      <p>
        Type: {space.type}
      </p>

      <p>
        Available Seats: {space.availableSeats}
      </p>

      <p>
        Power:
        {" "}
        {space.power ? "Available" : "Not Available"}
      </p>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
        onClick={() => navigate(`/space/${space.id}`)}
      >
        View Details
      </button>

    </div>
  );
}

export default SpaceCard;
