import {
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import { getSpaces } from "../utils/storageUtils";
import { LIBRARY_ENTRANCE } from "../data/spaces";

import {
  getAvailabilityPercentage,
  getStatus
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

  const availability =
    getAvailabilityPercentage(
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
          to="/"
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
        </Link>

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
          Available Seats Percentage:
          {" "}
          {availability}%
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

          <p className="mt-2">
            The colored marker shows the location
            and availability status of the selected space:
            {" "}
            {space.zone}.
          </p>

        </div>

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
