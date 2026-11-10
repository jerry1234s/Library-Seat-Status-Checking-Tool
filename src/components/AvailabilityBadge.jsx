import { getStatus } from "../utils/statusUtils";

function AvailabilityBadge({
  totalSeats,
  availableSeats
}) {

  const status =
    getStatus(
      totalSeats,
      availableSeats
    );

  return (

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

  );
}

export default AvailabilityBadge;
