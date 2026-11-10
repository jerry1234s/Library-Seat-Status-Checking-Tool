import { getStatus } from "../utils/statusUtils";

function AvailabilityBadge({ occupancy }) {

  const status =
    getStatus(occupancy);

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
