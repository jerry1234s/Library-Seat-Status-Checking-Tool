import {
  useLocation,
  useNavigate
} from "react-router-dom";
import AvailabilityBadge from "./AvailabilityBadge";
import {
  getAvailabilityPercentage,
  getOccupancyPercentage,
  getOccupiedSeats
} from "../utils/statusUtils";

function SpaceCard({ space }) {

  const navigate = useNavigate();
  const location = useLocation();

  const occupancy =
    getOccupancyPercentage(
      space.totalSeats,
      space.availableSeats
    );

  const availability =
    getAvailabilityPercentage(
      space.totalSeats,
      space.availableSeats
    );

  const occupiedSeats =
    getOccupiedSeats(
      space.totalSeats,
      space.availableSeats
    );

  return (

    <div className="border rounded-2xl p-4 shadow-sm">

      <div className="flex justify-between items-center">

        <h2 className="font-bold text-lg">
          {space.zone}
        </h2>

        <AvailabilityBadge
          totalSeats={space.totalSeats}
          availableSeats={space.availableSeats}
        />

      </div>

      <p className="mt-2">
        Floor: {space.floor}
      </p>

      <p>
        Type: {space.type}
      </p>

      <p>
        Total Seats: {space.totalSeats}
      </p>

      <p>
        Available Seats: {space.availableSeats}
        {" / "}
        {space.totalSeats}
      </p>

      <p>
        Available Seats Percentage: {availability}%
      </p>

      <p>
        Occupied Seats: {occupiedSeats}
        {" / "}
        {space.totalSeats}
      </p>

      <p>
        Occupancy: {occupancy}%
      </p>

      <p>
        Power:
        {" "}
        {
          space.power
            ? "Available"
            : "Not Available"
        }
      </p>

      <button
        className="
          mt-4
          bg-blue-600
          text-white
          px-4
          py-2
          rounded-xl
        "
        onClick={() =>
          navigate(
            `/space/${space.id}${location.search}`
          )
        }
      >
        View Details
      </button>

    </div>

  );

}

export default SpaceCard;
