import {
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import { getSpaces } from "../utils/storageUtils";
import {
  getAvailabilityPercentage,
  getStatus,
  getOccupancyPercentage,
  getOccupiedSeats
} from "../utils/statusUtils";

function SpaceDetail() {

  const { id } = useParams();
  const location = useLocation();
  const spaces = getSpaces();

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

  const status =
    getStatus(
      space.totalSeats,
      space.availableSeats
    );

  return (

    <div className="p-6">

      <div className="flex gap-3 mb-6">

        <Link
          to={`/results${location.search}`}
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

        <div className="flex items-center gap-3 mb-4">

          <span
            className={`
              ${status.bg}
              text-white
              px-3
              py-1
              rounded-full
              text-sm
            `}
          >
            {status.label}
          </span>

        </div>

        <p>
          Floor: {space.floor}
        </p>

        <p>
          Type: {space.type}
        </p>

        <p>
          Total Seats: {space.totalSeats}
        </p>

        <p>
          Available Seats:
          {" "}
          {space.availableSeats}
          {" / "}
          {space.totalSeats}
        </p>

        <p>
          Available Seats Percentage: {availability}%
        </p>

        <p>
          Occupied Seats:
          {" "}
          {occupiedSeats}
          {" / "}
          {space.totalSeats}
        </p>

        <p>
          Occupancy: {occupancy}%
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

          <div
            className={`
              absolute
              w-6
              h-6
              ${status.bg}
              rounded-full
              border-2
              border-white
              shadow-lg
            `}
            style={{
              top: space.markerTop,
              left: space.markerLeft
            }}
            title={space.zone}
          />

          <div
            className="
              absolute
              top-[12%]
              right-[5%]
              flex
              items-center
              gap-2
            "
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
              Library Entrance
            </span>

          </div>

        </div>

        <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm">

          <h3 className="font-bold mb-2">
            Map Guide
          </h3>

          <p>
            <span className="text-green-600 font-semibold">
              Green
            </span>
            {" = Available, "}
            <span className="text-yellow-600 font-semibold">
              Yellow
            </span>
            {" = Busy, "}
            <span className="text-red-600 font-semibold">
              Red
            </span>
            {" = Nearly Full"}
          </p>

          <p className="mt-1">
            The colored marker indicates the selected location:
            {" "}
            {space.zone}.
          </p>

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
